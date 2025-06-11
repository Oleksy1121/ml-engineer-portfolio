import styled from "styled-components"
import { ProgressBar } from "react-bootstrap"

export const SkillsSection = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`

export const StyledProgressBar = styled(ProgressBar)`
  width: 100%;
  height: 10px;

  .progress-bar {
    background-color: var(--color-accent);
    border-radius: 5px;
    transition: width 0.8s ease-in-out;
  }
`

export const SkillItem = styled.div`
  padding: 1.1rem;
  text-align: left;
  color: var(--color-text);
  width: 100%;
  margin: 0;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  
  gap: 1rem;
  width: 100%;
  margin: 40px auto;

  @media (max-width: 1200px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`

export const P = styled.p`
  color: var(--color-secondary-text);
  font-weight: 500;
  margin: 5px auto;

  &::first-letter {
    text-transform: capitalize;
  }
`
