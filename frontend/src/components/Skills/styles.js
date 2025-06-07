import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";

export const SkillsSection = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        margin-top: 80px;
        padding: 0 15px;
    }
`;

export const StyledProgressBar = styled(ProgressBar)`
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: var(--color-border-light);
    
    .progress-bar {
        background-color: var(--color-accent);
        border-radius: 5px;
        transition: width 0.8s ease-in-out;
    }
`;

export const SkillItem = styled.div`
    padding: 20px;
    text-align: left;
    color: var(--color-text);
    width: 100%;
    box-shadow: 0 4px 8px var(--color-shadow-light);
    margin: 0;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 15px var(--color-shadow-medium);
        border-color: var(--color-accent);
    }
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px 40px;
    width: 100%;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const H6 = styled.h6`
    color: var(--color-secondary-text);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;

    &::first-letter {
        text-transform: capitalize;
    }
`;