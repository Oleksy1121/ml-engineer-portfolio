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


def summarize_service(url: str):
    download_audio(url)
    transcription = get_transcription(openai=openai)
    summarize = get_summarize(openai=openai, transcription=transcription)
    return summarize