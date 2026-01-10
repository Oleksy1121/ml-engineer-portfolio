import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaGithub } from 'react-icons/fa';
import {
  AIResearchAnalystContainer,
  ReportContainer,
  ErrorMessage,
  CallToActionLink,
} from './styles';
import ResearchForm from './ResearchForm';
import ProgressTracker from './ProgressTracker';
import useResearchSSE from './hooks/useResearchSSE';

const API_URL = process.env.REACT_APP_RESEARCH_API_URL || 'http://localhost:8000';

function AIResearchAnalyst() {
  const [query, setQuery] = useState('');
  const [depth, setDepth] = useState('standard');
  const [sessionId, setSessionId] = useState(null);
  const [report, setReport] = useState(null);

  const {
    status,
    currentStep,
    progress,
    error,
    startListening,
    reset,
  } = useResearchSSE(API_URL);

  const handleStartResearch = async () => {
    try {
      reset();
      setReport(null);

      const response = await fetch(`${API_URL}/api/v1/research/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim(), depth }),
      });

      if (!response.ok) {
        throw new Error('Failed to start research');
      }

      const data = await response.json();
      setSessionId(data.session_id);
      startListening(data.session_id);
    } catch (err) {
      console.error('Failed to start research:', err);
    }
  };


  // Fetch report when status becomes completed
    React.useEffect(() => {
    const fetchReport = async () => {
        if (!sessionId) return;

        try {
        const response = await fetch(`${API_URL}/api/v1/research/${sessionId}/report`);
        if (!response.ok) throw new Error('Failed to fetch report');

        const data = await response.json();
        setReport(data.report);
        } catch (err) {
        console.error('Failed to fetch report:', err);
        }
    };

    if (status === 'completed' && sessionId && !report) {
        fetchReport();
    }
    }, [status, sessionId, report]);

  const handleNewResearch = () => {
    reset();
    setSessionId(null);
    setReport(null);
    setQuery('');
  };

  const isRunning = status === 'running';
  const isCompleted = status === 'completed';

  return (
    <AIResearchAnalystContainer>
      <h1 className="section-title">AI Research Analyst</h1>

      <div className="app-card">
        <ResearchForm
          query={query}
          setQuery={setQuery}
          depth={depth}
          setDepth={setDepth}
          onSubmit={handleStartResearch}
          isDisabled={isRunning}
        />

        {(isRunning || isCompleted) && (
          <ProgressTracker
            currentStep={currentStep}
            progress={progress}
            status={status}
          />
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {isCompleted && report && (
          <ReportContainer>
            <ReactMarkdown>{report}</ReactMarkdown>
          </ReportContainer>
        )}

        {isCompleted && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <button
              onClick={handleNewResearch}
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Start New Research
            </button>
          </div>
        )}
      </div>

      <CallToActionLink
        href="https://github.com/Oleksy1121/ai-research-analyst"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        <span>Check this project on GitHub</span>
      </CallToActionLink>
    </AIResearchAnalystContainer>
  );
}

export default AIResearchAnalyst;
