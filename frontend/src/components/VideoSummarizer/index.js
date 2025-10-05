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

  const handleSummarize = async () => {
    setSummary("");
  setStatus("Connecting to server...");
  setShowSummaryBox(true);
  setIsProcessing(true);

  try {
    const tokenRes = await fetch(`${process.env.REACT_APP_API_URL}/get_ws_token`);
    const { token } = await tokenRes.json();

    const wsProtocol = process.env.REACT_APP_API_URL.startsWith("https") ? "wss" : "ws";
    const host = process.env.REACT_APP_API_URL.replace(/^https?:\/\//, "").replace(/\/+$/, "");
    const wsUrl = `${wsProtocol}://${host}/ws/summarize?token=${token}`;

    wsRef.current = new WebSocket(wsUrl);

    wsRef.current.onopen = () => wsRef.current.send(url);

    wsRef.current.onmessage = (event) => {
      const msg = event.data;

      if (msg.startsWith("ERROR:")) {
        alert(msg.replace("ERROR:", "").trim());
        setStatus("");
        setSummary("");
        setShowSummaryBox(false);
        setIsProcessing(false);
        wsRef.current.close();
        return;
      }

      if (msg.startsWith("STATUS:")) {
        setStatus(msg.replace("STATUS:", "").trim());
        return;
      }

      if (msg.startsWith("SUMMARY:")) {
        setSummary(msg.replace("SUMMARY:", ""));
        setStatus("Finished!");
        setIsProcessing(false);
        wsRef.current.close();
        return;
      }

      setStatus(msg);
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
  } catch (err) {
      console.error(err);
      alert("Failed to connect to server");
      setIsProcessing(false);
    }
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
