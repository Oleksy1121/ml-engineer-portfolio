import React, { useState, useRef } from "react";
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
  Spinner,
} from "./styles";

function VideoSummarizer() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [showSummaryBox, setShowSummaryBox] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const wsRef = useRef(null);

  const handleSummarize = () => {
    if (!url) return alert("Please enter a video URL");

    const urlPattern = /^(https?:\/\/[^\s]+)$/;
    if (!urlPattern.test(url)) {
      return alert("Please enter a valid URL starting with http:// or https://");
    }

    if (isProcessing) return; 

    setSummary("");
    setStatus("Connecting to server...");
    setShowSummaryBox(true);
    setIsProcessing(true);

    wsRef.current = new WebSocket("ws://localhost:8000/ws/summarize");

    wsRef.current.onopen = () => {
      wsRef.current.send(url);
      setStatus("Connected. Processing...");
    };

    wsRef.current.onmessage = (event) => {
      const msg = event.data;
      if (msg.startsWith("SUMMARY:")) {
        const summaryText = msg.replace("SUMMARY:", "");
        setSummary(summaryText);
        setStatus("Finished!");
        setIsProcessing(false);
        wsRef.current.close();
      } else {
        setStatus(msg);
      }
    };

    wsRef.current.onerror = (err) => {
      console.error("WebSocket error:", err);
      setStatus("Error occurred");
      setIsProcessing(false);
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket connection closed");
      setIsProcessing(false);
    };
  };

  const handleClear = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
    setUrl("");
    setSummary("");
    setStatus("");
    setShowSummaryBox(false);
    setIsProcessing(false);
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
          <FormButton onClick={handleSummarize} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Summarize"}
          </FormButton>
          <FormButton className="clear-button" onClick={handleClear}>
            {isProcessing ? "Stop" : "Clear"}
          </FormButton>
        </InputGroup>

      {showSummaryBox && (
        <SummaryBox>
          {isProcessing && (
            <>
              <Spinner />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <strong>Status:</strong> {status}
              </p>
            </>
          )}
          {summary && <ReactMarkdown>{summary}</ReactMarkdown>}
        </SummaryBox>
      )}
      </SummarizerCard>

      <CallToActionLink
        href="https://github.com/Oleksy1121/video-summarizer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        <span>Check this project on GitHub</span>
      </CallToActionLink>
    </SummarizerContainer>
  );
}

export default VideoSummarizer;
