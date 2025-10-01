from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from predict.service import DigitPredictService
from summarize.service import summarize_service
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

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

MODEL_PATH = "models/best.pt"

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
async def handle_predict_request(request_body: PredictRequest):

    base64_string = request_body.base64_string
    if ',' in base64_string:
        base64_string = base64_string.split(',')[1]

    if predictor_service is None:
        raise HTTPException(
            status_code=500, detail="Prediction service is not available"
        )

    prediction_data = predictor_service.predict(base64_string)
    return {"predict": prediction_data}


@app.post('/summarize')
def summarize_video(video: VideoURL):
    summarize = summarize_service(video.url)
    return {"summary": summarize}