import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import {
  SummarizerContainer,
  SummarizerCard,
  InputGroup,
  FormInput,
  FormButton,
  SummaryBox,
  CallToActionLink,
} from "./styles";

function VideoSummarizer() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");

  const handleSummarize = () => {
    if (!url) return alert("Please enter a video URL");

    setSummary("");
    setStatus("Connecting to server...");

    const ws = new WebSocket("ws://localhost:8000/ws/summarize");

    ws.onopen = () => {
      ws.send(url);
      setStatus("Connected. Processing...");
    };

    ws.onmessage = (event) => {
      const msg = event.data;
      if (msg.startsWith("SUMMARY:")) {
        const summaryText = msg.replace("SUMMARY:", "");
        setSummary(summaryText);
        setStatus("Finished!");
        ws.close();
      } else {
        setStatus(msg); // aktualny status np. "Downloading audio..."
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      setStatus("Error occurred");
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };
  };

  return (
    <SummarizerContainer id="video-summarizer">
      <h1 className="section-title">Video Summarizer</h1>
      <SummarizerCard className="app-card">
        <InputGroup>
          <FormInput
            type="text"
            placeholder="Paste YouTube video link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <FormButton onClick={handleSummarize}>Summarize</FormButton>
        </InputGroup>

        <SummaryBox>
          {status && <p><strong>Status:</strong> {status}</p>}
          {summary ? <ReactMarkdown>{summary}</ReactMarkdown> : <p>No summary yet.</p>}
        </SummaryBox>
      </SummarizerCard>

      <CallToActionLink href="https://github.com/Oleksy1121/video-summarizer" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
        <span>Check this project on GitHub</span>
      </CallToActionLink>
    </SummarizerContainer>
  );
}

export default VideoSummarizer;
