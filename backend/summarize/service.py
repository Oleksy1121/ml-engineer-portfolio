from fastapi import FastAPI
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from openai import OpenAI

from scripts.video_summarizer.download import download_audio
from scripts.video_summarizer.transcribe import get_transcription
from scripts.video_summarizer.summarizer import get_summarize


load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
openai = OpenAI(api_key=openai_api_key)


async def summarize_service(url: str, send_status):
    await send_status("Downloading audio...")
    download_audio(url)

    await send_status("Generate Transcription from audio file...")
    transcription = get_transcription(openai=openai)

    await send_status("Generatng Summarize...")
    summary = get_summarize(openai=openai, transcription=transcription)

    await send_status("Finished!")
    return summary