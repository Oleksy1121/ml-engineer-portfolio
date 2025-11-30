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
  Spinner,
} from "./styles";

function VideoSummarizer() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [showSummaryBox, setShowSummaryBox] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSummarize = async () => {
    if (!url.trim()) {
      alert("Please enter a valid YouTube URL");
      return;
    }

    setSummary("");
    setStatus("Validating video...");
    setShowSummaryBox(true);
    setIsProcessing(true);

    try {
      const response = await fetch(
        "https://video-summarizer-backend-202366413188.europe-west4.run.app/api/v1/summarize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url.trim() }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle error responses
        throw new Error(data.detail || "Failed to summarize video");
      }

      // Success
      setSummary(data.summary);
      setStatus("Finished!");
      setIsProcessing(false);
    } catch (err) {
      console.error("Summarization error:", err);
      alert(err.message || "Failed to summarize video. Please try again.");
      setStatus("");
      setSummary("");
      setShowSummaryBox(false);
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
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
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isProcessing) {
                handleSummarize();
              }
            }}
          />
          <FormButton onClick={handleSummarize} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Summarize"}
          </FormButton>
          <FormButton className="clear-button" onClick={handleClear} disabled={isProcessing}>
            Clear
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
                <p style={{ textAlign: "center", fontSize: "0.9em", color: "#666" }}>
                  This may take a few minutes...
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