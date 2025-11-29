import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import {
  TechDocsContainer,
  ChatCard,
  ChatMessages,
  Message,
  MessageBubble,
  MessageMeta,
  SourcesContainer,
  SourcesTitle,
  SourceTag,
  InputContainer,
  ChatInput,
  SendButton,
  ExamplesSection,
  ExamplesTitle,
  ExamplesGrid,
  ExampleButton,
  TypingIndicator,
  WelcomeMessage,
  CallToActionLink,
  ErrorMessage,
} from "./styles";

// API URL - zmień na swój backend
const API_URL = process.env.REACT_APP_TECHDOCS_API_URL || "https://techdocs-backend-202366413188.europe-west4.run.app";

const EXAMPLE_QUESTIONS = [
  "How to create a neural network in PyTorch?",
  "How to define a FastAPI endpoint?",
  "What is autograd in PyTorch?",
  "How to handle CORS in FastAPI?",
];

function TechDocs() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (question) => {
    const messageText = question || input.trim();
    if (!messageText || isLoading) return;

    // Clear input and error
    setInput("");
    setError(null);

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: messageText,
          options: {
            include_sources: true,
            max_sources: 4,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant message
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.answer,
        sources: data.sources || [],
        metadata: data.metadata,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleExampleClick = (question) => {
    sendMessage(question);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <TechDocsContainer id="techdocs">
      <h1 className="section-title">TechDocs Assistant</h1>

      <ChatCard className="app-card">
        <ChatMessages>
          {messages.length === 0 ? (
            <>
              <WelcomeMessage>
                <h2>👋 Welcome to TechDocs!</h2>
                <p>
                  Ask me anything about PyTorch or FastAPI documentation. 
                  I'll find the relevant information and provide answers with sources.
                </p>
              </WelcomeMessage>
              <ExamplesSection>
                <ExamplesTitle>Try one of these questions:</ExamplesTitle>
                <ExamplesGrid>
                  {EXAMPLE_QUESTIONS.map((question, index) => (
                    <ExampleButton
                      key={index}
                      onClick={() => handleExampleClick(question)}
                    >
                      {question}
                    </ExampleButton>
                  ))}
                </ExamplesGrid>
              </ExamplesSection>
            </>
          ) : (
            <>
              {messages.map((message) => (
                <Message key={message.id} $isUser={message.role === "user"}>
                  <MessageBubble $isUser={message.role === "user"}>
                    {message.role === "assistant" ? (
                      <>
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                        {message.sources && message.sources.length > 0 && (
                          <SourcesContainer>
                            <SourcesTitle>📚 Sources:</SourcesTitle>
                            {message.sources.map((source) => (
                              <SourceTag key={source.id}>
                                [{source.doc_type.toUpperCase()}] {source.path}
                              </SourceTag>
                            ))}
                          </SourcesContainer>
                        )}
                      </>
                    ) : (
                      message.content
                    )}
                  </MessageBubble>
                  <MessageMeta>{formatTime(message.timestamp)}</MessageMeta>
                </Message>
              ))}
              {isLoading && (
                <Message $isUser={false}>
                  <TypingIndicator>
                    <span></span>
                    <span></span>
                    <span></span>
                  </TypingIndicator>
                </Message>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </ChatMessages>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <InputContainer>
          <ChatInput
            type="text"
            placeholder="Ask about PyTorch or FastAPI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <SendButton onClick={() => sendMessage()} disabled={isLoading || !input.trim()}>
            <FaPaperPlane />
            Send
          </SendButton>
        </InputContainer>
      </ChatCard>

      <CallToActionLink
        href="https://github.com/Oleksy1121/TechDocs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        <span>Check this project on GitHub</span>
      </CallToActionLink>
    </TechDocsContainer>
  );
}

export default TechDocs;