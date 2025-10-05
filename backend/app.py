import os
from fastapi import FastAPI, HTTPException, WebSocket, Request, WebSocketDisconnect
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from pydantic import BaseModel
from predict.service import DigitPredictService
from summarize.service import summarize_service
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime, timedelta
import secrets
import asyncio

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter


MODEL_PATH = "models/best.pt"

VS_API_KEY = os.getenv("VS_API_KEY")
ws_tokens = {}

DAILY_LIMIT_FOR_SUMMARIZE = 30
ws_request_counts = {}


origins = [
    "https://frontend-202366413188.europe-west4.run.app",
    "https://marcin-oleszczyk.pl",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)


@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Too many requests. Limit is 30 per day."},
    )

try:
    predictor_service = DigitPredictService(MODEL_PATH)
except FileNotFoundError as e:
    print("File not found")
    predictor_service = None


class PredictRequest(BaseModel):
    base64_string: str

class VideoURL(BaseModel):
    url: str


@app.post("/predict")
@limiter.limit("30/minute")
async def handle_predict_request(request: Request, request_body: PredictRequest):

    base64_string = request_body.base64_string
    if ',' in base64_string:
        base64_string = base64_string.split(',')[1]

    if predictor_service is None:
        raise HTTPException(
            status_code=500, detail="Prediction service is not available"
        )

    prediction_data = predictor_service.predict(base64_string)
    return {"predict": prediction_data}


def check_ws_limit(ip: str) -> bool:
    """Checks if the client has exceeded the 30 requests per day limit."""
    now = datetime.utcnow()
    count, first_request = ws_request_counts.get(ip, (0, now))

    if now - first_request > timedelta(days=1):
        count = 0
        first_request = now

    if count >= DAILY_LIMIT_FOR_SUMMARIZE:
        return False
    
    ws_request_counts[ip] = (count + 1, first_request)
    return True


@app.get("/get_ws_token")
def get_ws_token():
    """Generates a short-lived token for WebSocket authorization."""
    token = secrets.token_urlsafe(16)
    ws_tokens[token] = datetime.utcnow() + timedelta(minutes=5)
    return {"token": token}


async def cleanup_expired_tokens():
    while True:
        now = datetime.utcnow()
        expired = [token for token, exp in ws_tokens.items() if exp < now]
        for token in expired:
            del ws_tokens[token]
        await asyncio.sleep(300) 


@app.on_event("startup")
async def startup_event():
    asyncio.create_task(cleanup_expired_tokens())


@app.websocket("/ws/summarize")
async def websocket_summarize(websocket: WebSocket):

    # API Authorization
    token = websocket.query_params.get("token")
    if token not in ws_tokens or ws_tokens[token] < datetime.utcnow():
        await websocket.accept()
        await websocket.send_text("ERROR: Unauthorized. Invalid API key.")
        await websocket.close()
        return
    
    del ws_tokens[token]

    # Limitations
    client_ip = websocket.client.host
    if not check_ws_limit(client_ip):
        await websocket.accept()
        await websocket.send_text("ERROR: Daily limit reached (30 requests/day).")
        await websocket.close()
        return


    await websocket.accept()
    try:
        url = await websocket.receive_text()

        async def send_status(message: str):
            await websocket.send_text(f"STATUS:{message}")

        try:
            summary = await summarize_service(url, send_status)
            await websocket.send_text(f"SUMMARY:{summary}")
        except ValueError as e:
            await websocket.send_text(f"ERROR:{str(e)}")
            await websocket.close()

    except WebSocketDisconnect:
        print("Client has been disconected")