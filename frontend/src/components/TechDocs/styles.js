import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
`;

export const TechDocsContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const ChatCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  height: 600px;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: linear-gradient(
    180deg,
    var(--color-card-bg) 0%,
    var(--color-bg) 100%
  );

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

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  animation: ${fadeIn} 0.3s ease-out;
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 14px 18px;
  border-radius: ${(props) =>
    props.$isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};
  background: ${(props) =>
    props.$isUser ? "var(--color-accent)" : "var(--color-card-bg)"};
  color: ${(props) => (props.$isUser ? "#ffffff" : "var(--color-text)")};
  border: ${(props) =>
    props.$isUser ? "none" : "1px solid var(--color-border-light)"};
  box-shadow: 0 2px 8px var(--color-shadow-light);
  line-height: 1.5;
  text-align: left;

  /* Markdown styling */
  p {
    margin: 0 0 10px 0;
    font-size: var(--font-size-p);

    &:last-child {
      margin-bottom: 0;
    }
  }

  code {
    background: ${(props) =>
      props.$isUser ? "rgba(255,255,255,0.2)" : "var(--color-border-light)"};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Fira Code", "Consolas", monospace;
    font-size: 0.9em;
  }

  pre {
    background: ${(props) =>
      props.$isUser ? "rgba(0,0,0,0.2)" : "var(--color-bg)"};
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 10px 0;

    code {
      background: none;
      padding: 0;
    }
  }

  ul,
  ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 12px 14px;
  }
`;

export const MessageMeta = styled.span`
  font-size: 0.75em;
  color: var(--color-light-gray);
  margin-top: 4px;
  padding: 0 4px;
`;

export const SourcesContainer = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--color-border-light);
`;

export const SourcesTitle = styled.span`
  font-size: 0.8em;
  font-weight: 600;
  color: var(--color-secondary-text);
  display: block;
  margin-bottom: 8px;
`;

export const SourceTag = styled.span`
  display: inline-block;
  font-size: 0.75em;
  background: var(--color-bg);
  color: var(--color-secondary-text);
  padding: 4px 10px;
  border-radius: 12px;
  margin: 2px 4px 2px 0;
  border: 1px solid var(--color-border-light);
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px;
  background: var(--color-card-bg);
  border-top: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 15px;
    gap: 10px;
  }
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 14px 18px;
  border: 2px solid var(--color-border-light);
  border-radius: 25px;
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

export const SendButton = styled.button`
  padding: 14px 24px;
  background-color: var(--color-orange);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--color-orange);
    box-shadow: inset 0 0 0 2px var(--color-orange);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
  }
`;

export const ExamplesSection = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ExamplesTitle = styled.h3`
  font-size: 1.1em;
  color: var(--color-secondary-text);
  margin-bottom: 16px;
  font-weight: 500;
`;

export const ExamplesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const ExampleButton = styled.button`
  padding: 10px 16px;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-shadow-light);
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px 18px;
  background: var(--color-card-bg);
  border-radius: 18px 18px 18px 4px;
  border: 1px solid var(--color-border-light);
  width: fit-content;
  animation: ${fadeIn} 0.3s ease-out;

  span {
    width: 8px;
    height: 8px;
    background: var(--color-accent);
    border-radius: 50%;
    animation: ${pulse} 1.4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const WelcomeMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-secondary-text);

  h2 {
    font-size: 1.5em;
    color: var(--color-text);
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    max-width: 500px;
    margin: 0 auto;
  }
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

export const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 10px 20px;
  text-align: center;
  font-size: 0.9em;
`;