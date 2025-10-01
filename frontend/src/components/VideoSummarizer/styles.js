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
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

export const FormButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  background-color: var(--color-accent);
  color: var(--color-bg);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px var(--color-shadow-medium);
  }
`;

export const SummaryBox = styled.div`
  text-align: left;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-border-light);
  min-height: 200px;

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
