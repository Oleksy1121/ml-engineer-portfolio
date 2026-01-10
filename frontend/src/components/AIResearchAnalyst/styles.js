import styled, { keyframes } from 'styled-components';

// Container
export const AIResearchAnalystContainer = styled.div`
  width: 100%;
  text-align: center;
`;

// Form styles
export const FormContainer = styled.form`
  display: flex;
  gap: 12px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 14px 18px;
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--color-light-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const DepthSelect = styled.select`
  padding: 14px 18px;
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--color-accent);
    box-shadow: inset 0 0 0 2px var(--color-accent);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Progress styles
export const ProgressContainer = styled.div`
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 20px;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const StepDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $status }) => {
    if ($status === 'completed') return 'var(--color-accent)';
    if ($status === 'active') return 'var(--color-orange)';
    return 'var(--color-border-light)';
  }};
  transition: all 0.3s ease;
  animation: ${({ $status }) => ($status === 'active' ? pulse : 'none')} 1.5s infinite;
`;

export const StepLabel = styled.span`
  font-size: 11px;
  font-weight: ${({ $status }) => ($status === 'active' ? '600' : '400')};
  color: ${({ $status }) => {
    if ($status === 'completed') return 'var(--color-accent)';
    if ($status === 'active') return 'var(--color-orange)';
    return 'var(--color-light-gray)';
  }};

  @media (max-width: 576px) {
    display: none;
  }
`;

export const StepConnector = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({ $completed }) =>
    $completed ? 'var(--color-accent)' : 'var(--color-border-light)'};
  transition: all 0.3s ease;

  @media (max-width: 576px) {
    width: 15px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span {
    font-size: 12px;
    color: var(--color-secondary-text);
  }

  strong {
    font-size: 20px;
    color: var(--color-text);
  }
`;

// Report styles
export const ReportContainer = styled.div`
  text-align: left;
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
  max-height: 500px;
  overflow-y: auto;

  h1, h2, h3 {
    color: var(--color-text);
    margin-top: 1em;
  }

  p {
    color: var(--color-secondary-text);
    line-height: 1.7;
  }

  ul, ol {
    margin-left: 20px;
    color: var(--color-secondary-text);
  }

  code {
    background: var(--color-border-light);
    padding: 2px 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-border-light);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 3px;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

export const CallToActionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--color-accent);
  color: var(--color-bg);
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  margin-bottom: 40px;
  margin-top: 40px;

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
    border: 2px solid var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
  }
`;