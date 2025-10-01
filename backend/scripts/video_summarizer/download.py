import os
import subprocess
import json
from scripts.video_summarizer.constants import AUDIO_FILENAME, MAX_DURATION, MAX_SIZE


def get_video_info(url: str):
    """
    Retrieve metadata of a video from a URL using yt-dlp.

    Args:
        url (str): Video URL.

    Returns:
        dict | None: Video metadata dictionary if successful, None on failure.
    """
    try:
        result = subprocess.run(
            ["yt-dlp", "--skip-download", "--print-json", "-f", "bestaudio", url],
            capture_output=True,
            text=True,
            check=True
        )
        info = json.loads(result.stdout)
        return info
    except subprocess.CalledProcessError:
        return None


def validate_video(url: str):
    """
    Validate video metadata fetched via yt-dlp.

    This function checks:
    - If metadata can be retrieved (valid video link).
    - If the video duration does not exceed MAX_DURATION.
    - If the file size does not exceed MAX_SIZE.

    Args:
        url (str): Video URL.

    Returns:
        tuple[bool, str | dict]:
            - (False, error_message) if validation fails.
            - (True, info_dict) if validation passes.
    """
    info = get_video_info(url)
    if not info:
        return False, "Could not fetch metadata. This does not look like a valid video URL."

    duration = info.get("duration", 0)
    filesize = info.get("filesize") or info.get("filesize_approx") or 0

    if duration > MAX_DURATION:
        return False, f"The video is longer than {MAX_DURATION/60:.1f} minutes."
    if filesize and filesize > MAX_SIZE:
        return False, f"The video file is larger than {MAX_SIZE/(1024*1024):.0f} MB."
    
    return True, info


def download_audio(url: str, audio_filename: str = AUDIO_FILENAME) -> None:
    """Download audio from a URL video using yt-dlp.

    Args:
        url (str): Video URL.
        audio_filename (str, optional): Path to save the downloaded audio file. Defaults to "audio/audio_from_video.mp3".

    Returns:
        None
    """
    os.makedirs(os.path.dirname(audio_filename), exist_ok=True)

    if os.path.exists(audio_filename):
        os.remove(audio_filename)
        # print("Old audio file has been deleted.")
        
    subprocess.run([
        "yt-dlp",
        "-x",                        # only audio
        "--audio-format", "mp3",     # convert to mp3
        "--force-overwrites",        # forve override file
        "-o", audio_filename,        # save file
        url
    ])
