import { useState, useCallback, useRef } from 'react';

const useResearchSSE = (apiUrl) => {
  const [status, setStatus] = useState('idle'); // idle | running | completed | error
  const [currentStep, setCurrentStep] = useState(null);
  const [progress, setProgress] = useState({
    sourcesCount: 0,
    findingsCount: 0,
    iteration: 0,
    coverageScore: null,
  });
  const [error, setError] = useState(null);
  const eventSourceRef = useRef(null);

  const startListening = useCallback((sessionId) => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    const eventSource = new EventSource(`${apiUrl}/api/v1/research/${sessionId}/stream`);
    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        switch (data.event) {
          case 'started':
            setStatus('running');
            break;
            
          case 'step_completed':
            setCurrentStep(data.step);
            if (data.data) {
              setProgress(prev => ({
                ...prev,
                sourcesCount: data.data.new_sources 
                  ? prev.sourcesCount + data.data.new_sources 
                  : prev.sourcesCount,
                findingsCount: data.data.new_findings 
                  ? prev.findingsCount + data.data.new_findings 
                  : prev.findingsCount,
                coverageScore: data.data.coverage_score ?? prev.coverageScore,
              }));
            }
            break;
            
          case 'done':
            setStatus('completed');
            if (data.data) {
              setProgress(prev => ({
                ...prev,
                sourcesCount: data.data.sources_count ?? prev.sourcesCount,
                findingsCount: data.data.findings_count ?? prev.findingsCount,
              }));
            }
            eventSource.close();
            break;
            
          case 'error':
            setStatus('error');
            setError(data.data?.error || 'Unknown error occurred');
            eventSource.close();
            break;
            
          default:
            break;
        }
      } catch (err) {
        console.error('Failed to parse SSE event:', err);
      }
    };

    eventSource.onerror = () => {
      setStatus('error');
      setError('Connection lost');
      eventSource.close();
    };
  }, [apiUrl]);

  const stopListening = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    stopListening();
    setStatus('idle');
    setCurrentStep(null);
    setProgress({
      sourcesCount: 0,
      findingsCount: 0,
      iteration: 0,
      coverageScore: null,
    });
    setError(null);
  }, [stopListening]);

  return {
    status,
    currentStep,
    progress,
    error,
    startListening,
    stopListening,
    reset,
  };
};

export default useResearchSSE;