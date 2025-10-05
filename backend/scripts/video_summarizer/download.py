import os
from dotenv import load_dotenv
import subprocess
import json
import logging
from scripts.video_summarizer.constants import AUDIO_FILENAME, MAX_DURATION, MAX_SIZE
from scripts.video_summarizer.secret_manager import get_secret_file_path

load_dotenv()

logging.basicConfig(level=logging.INFO)


cookies_path = get_secret_file_path(project_id="ml-portfolio-xyz123", secret_id="YT_COOCKIES")

if os.path.exists(cookies_path):
    logging.info(f"Cookies file exists at {cookies_path}")
else:
    logging.error(f"Cookies file NOT found at {cookies_path}")
    cookies_path = None


def get_video_info(url: str):
    """
    Retrieve metadata of a video from a URL using yt-dlp.
    """
    logging.info(f"[get_video_info] Trying to fetch metadata for: {url}")
    try:
        result = subprocess.run(
            ["yt-dlp","--cookies", cookies_path, "--skip-download", "--print-json", "-f", "bestaudio", url],
            capture_output=True,
            text=True,
            check=False 
        )

        logging.info(f"[get_video_info] yt-dlp returncode: {result.returncode}")
        logging.info(f"[get_video_info] yt-dlp stdout: {result.stdout[:500]}") 
        logging.info(f"[get_video_info] yt-dlp stderr: {result.stderr}")

        if result.returncode != 0 or not result.stdout.strip():
            logging.error("[get_video_info] yt-dlp failed to fetch metadata.")
            return None

        info = json.loads(result.stdout)
        logging.info(f"[get_video_info] Successfully parsed metadata keys: {list(info.keys())}")
        return info

    except json.JSONDecodeError as e:
        logging.exception(f"[get_video_info] JSON decode error: {e}")
        return None
    except Exception as e:
        logging.exception(f"[get_video_info] Unexpected error: {e}")
        return None


def validate_video(url: str):
    logging.info(f"[validate_video] Validating video: {url}")
    info = get_video_info(url)
    if not info:
        return False, "Could not fetch metadata. This does not look like a valid video URL."

    duration = info.get("duration", 0)
    filesize = info.get("filesize") or info.get("filesize_approx") or 0
    logging.info(f"[validate_video] duration={duration}, filesize={filesize}")

    if duration > MAX_DURATION:
        return False, f"The video is longer than {MAX_DURATION/60:.1f} minutes."
    if filesize and filesize > MAX_SIZE:
        return False, f"The video file is larger than {MAX_SIZE/(1024*1024):.0f} MB."
    
    return True, info


def download_audio(url: str, audio_filename: str = AUDIO_FILENAME) -> None:
    logging.info(f"[download_audio] Downloading audio from: {url} -> {audio_filename}")
    os.makedirs(os.path.dirname(audio_filename), exist_ok=True)

    if os.path.exists(audio_filename):
        os.remove(audio_filename)
        logging.info("[download_audio] Old audio file deleted.")
        
    result = subprocess.run([
        "yt-dlp",
        "--cookies", cookies_path,
        "-x",
        "--audio-format", "mp3",
        "--force-overwrites",
        "-o", audio_filename,
        url
    ], capture_output=True, text=True)

    logging.info(f"[download_audio] returncode={result.returncode}")
    logging.info(f"[download_audio] stdout={result.stdout[:300]}")
    logging.info(f"[download_audio] stderr={result.stderr}")
