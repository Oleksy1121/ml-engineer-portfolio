import styled from "styled-components";

export const SummarizerContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const SummarizerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-card-bg);
  color: var(--color-text);

  &::placeholder {
    color: var(--color-light-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: var(--color-shadow-light);
  }
`;

export const FormButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  background-color: var(--color-orange);
  color: var(--color-bg);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: var(--color-orange);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px var(--color-shadow-medium);
  }
  
  &.clear-button {
    background-color: var(--color-accent);
    color: var(--color-bg);

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px var(--color-shadow-medium);
  }}
`;

export const SummaryBox = styled.div`
  text-align: left;
  padding: 20px;
  background-color: var(--color-card-bg);
  border-top: 2px solid var(--color-border-light);
  min-height: 100px;

  p {
    color: var(--color-secondary-text);
  }

  h1, h2, h3 {
    margin-top: 1em;
    color: var(--color-text);
  }

  ul {
    margin-left: 20px;
    list-style: disc;
  }
`;

export const Spinner = styled.div`
  border: 8px solid var(--color-border-light);
  border-top: 8px solid var(--color-accent);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
`