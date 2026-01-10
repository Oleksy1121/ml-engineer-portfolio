import React from 'react';
import {
  ProgressContainer,
  StepperContainer,
  Step,
  StepDot,
  StepLabel,
  StepConnector,
  StatsContainer,
  StatItem,
} from './styles';

const STEPS = [
  { key: 'intake', label: 'Intake' },
  { key: 'planning', label: 'Planning' },
  { key: 'search', label: 'Search' },
  { key: 'analysis', label: 'Analysis' },
  { key: 'quality_gate', label: 'Quality' },
  { key: 'synthesis', label: 'Synthesis' },
  { key: 'report', label: 'Report' },
];

function ProgressTracker({ currentStep, progress, status }) {
  const currentIndex = STEPS.findIndex((s) => s.key === currentStep);

  const getStepStatus = (index) => {
    if (status === 'completed') return 'completed';
    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <ProgressContainer>
      <StepperContainer>
        {STEPS.map((step, index) => (
          <React.Fragment key={step.key}>
            <Step>
              <StepDot $status={getStepStatus(index)} />
              <StepLabel $status={getStepStatus(index)}>{step.label}</StepLabel>
            </Step>
            {index < STEPS.length - 1 && (
              <StepConnector $completed={index < currentIndex || status === 'completed'} />
            )}
          </React.Fragment>
        ))}
      </StepperContainer>

      <StatsContainer>
        <StatItem>
          <span>Sources</span>
          <strong>{progress.sourcesCount}</strong>
        </StatItem>
        <StatItem>
          <span>Findings</span>
          <strong>{progress.findingsCount}</strong>
        </StatItem>
        {progress.coverageScore !== null && (
          <StatItem>
            <span>Coverage</span>
            <strong>{Math.round(progress.coverageScore * 100)}%</strong>
          </StatItem>
        )}
      </StatsContainer>
    </ProgressContainer>
  );
}

export default ProgressTracker;