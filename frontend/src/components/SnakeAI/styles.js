import styled from "styled-components";

export const SnakeContainer = styled.div`
  width: 100%;
  text-align: center;

  p {
    color: var(--color-secondary-text);
    font-family: var(--font-secondary);
    font-size: 1.7rem;
    line-height: 1.7;
  }
  
  @media (max-width: 1400px) {
    p {
      font-size: 1.4rem;
    }
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  width: 100%; /* pełna szerokość karty */
`;

export const Gif = styled.img`
  flex: 1;
  min-width: 300px;
  border-radius: 8px;
  width: 100%;
`;

export const TextBlock = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: justify;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-secondary-text);
  margin: 3rem auto; 
  width: 100%;
`;

export const VideoSection = styled.div`
  width: 100%;
  margin-top: 2rem;

  video {
    width: 100%;
    border-radius: 8px;
    margin-top: 1rem;
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
