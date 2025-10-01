from fastapi import FastAPI
from pydantic import BaseModel
import os
import glob
from dotenv import load_dotenv
from openai import OpenAI

from scripts.video_summarizer.download import download_audio, get_video_info, validate_video
from scripts.video_summarizer.transcribe import get_transcription
from scripts.video_summarizer.summarizer import get_summarize
from scripts.video_summarizer.constants import AUDIO_FILENAME


load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
openai = OpenAI(api_key=openai_api_key)


async def summarize_service(url: str, send_status):
    await send_status("Validating URL...")

    is_valid, result = validate_video(url)
    if not is_valid:
        await send_status(result)
        raise ValueError(result)

    try:
        await send_status("Downloading audio...")
        download_audio(url)

        await send_status("Generate Transcription from audio file...")
        transcription = get_transcription(openai=openai)

        await send_status("Generatng Summarize...")
        summary = get_summarize(openai=openai, transcription=transcription)
    
    finally:
        audio_folder = os.path.dirname(AUDIO_FILENAME)
        for file_path in glob.glob(os.path.join(audio_folder, "*")):
            os.remove(file_path)

    await send_status("Finished!")
    return summary