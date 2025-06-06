import styled from "styled-components";

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100%;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    flex-basis: 300px;
    min-width: 280px;
    max-width: 400px;
    padding: 30px 20px;
    border-left: 2px solid var(--color-border-light);
    background: var(--color-card-bg);
    color: var(--color-text);

    @media (max-width: 1150px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
        border-left: none;
        border-top: 1px solid var(--color-border-light);
        padding: 20px;
        margin-top: 20px;
    }
`;

export const PredictionBarContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    box-sizing: border-box;

    @media (max-width: 1150px) {
        display: none;
    }
`;

export const PredictionLabel = styled.span`
    font-size: 1.8em;
    font-weight: 700;
    margin-right: 15px;
    color: var(--color-text);
    width: 30px;
    text-align: right;
    flex-shrink: 0;
`;

export const ProgressBarWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    height: 30px;
    border: 1px solid var(--color-border-light);
    box-shadow: 0px 2px 8px var(--color-shadow-light);
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color-bg);
`;

export const ProgressBarFill = styled.div`
    background: linear-gradient(to right, var(--color-accent), #68a0f6);
    height: 100%;
    width: ${props => props.$probability * 100}%;
    border-radius: 0px;
    transition: width 0.5s ease-in-out;
`;

export const ResultTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
`;

export const Text = styled.p`
    font-size: 1.5em;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 5px;
`;

export const DigitText = styled.p`
    color: var(--color-accent);
    font-weight: 700;
    font-size: 3em;
    margin-left: 0px;
    
    @media (min-width: 577px) {
        display: inline-block;
        margin-left: 10px;
    }
`;