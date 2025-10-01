import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import {
  SummarizerContainer,
  SummarizerCard,
  InputGroup,
  FormInput,
  FormButton,
  SummaryBox,
} from "./styles"

function VideoSummarizer() {
  const [url, setUrl] = useState("")
  const [summary, setSummary] = useState("")

  const handleSummarize = async () => {
    if (!url) return alert("Please enter a video URL")

    try {
      // Call your FastAPI backend here
      const res = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      setSummary(data.summary)
    } catch (err) {
      console.error(err)
      alert("Something went wrong while summarizing")
    }
  }

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
          {summary ? <ReactMarkdown>{summary}</ReactMarkdown> : <p>No summary yet.</p>}
        </SummaryBox>
      </SummarizerCard>
    </SummarizerContainer>
  )
}

export default VideoSummarizer
