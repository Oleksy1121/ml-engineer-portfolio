import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";

export const SkillsSection = styled.div`
width: 80%;
//border: 1px solid black;
margin: auto;

`

export const SkilltTitle = styled.h1`
    margin-top: 50px;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid var(--color-text);
    font-size: var(--Section-header-size);

`

export const StyledProgressBar = styled(ProgressBar)`
    width: 100%;

`


export const SkillItem = styled.div`
  background-color: var(--color-bg);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  text-align: left; 
  color: var(--color-text); 
`;


export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 40px;
  width: 100%; 
  margin: 60px auto;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const H6 = styled.h6`
  color: var(--color-light-gray);

  &::first-letter{
    text-transform: capitalize;
  }
`