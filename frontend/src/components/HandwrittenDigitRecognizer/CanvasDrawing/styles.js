import styled from "styled-components";

export const CanvasContainer = styled.canvas`
    display: block;
    margin: 20px auto;
    
    background: var(--color-bg);
    border: 2px solid var(--color-accent);
    box-shadow: 0px 0px 15px rgba(59, 130, 246, 0.4);
    border-radius: 12px;
    cursor: crosshair;

    width: 100%;
    max-width: 600px;
    aspect-ratio: 1 / 1;

    @media (max-width: 720px) {
        max-width: 70vw; 
    }
`;
