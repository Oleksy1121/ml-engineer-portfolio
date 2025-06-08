import styled from "styled-components";

export const HomeContainer = styled.div`
    background: var(--color-bg);
    margin: 100px auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
        width: 95%;
        text-align: center;
        padding: 30px 15px;
        margin: 80px auto;
    }

    @media (max-width: 576px) {
        margin: 50px auto;
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    text-align: left;
    margin-right: 50px;
    max-width: 60%;

    @media (max-width: 992px) {
        width: 100%;
        margin-right: 0;
        text-align: center;
        order: 2;
        max-width: 100%;
        margin-top: 30px;
    }

    @media (max-width: 576px) {
        margin-top: 20px;
    }
`;

export const ImageContainer = styled.div`
    width: clamp(250px, 30vw, 360px);
    height: clamp(250px, 30vw, 360px); 
    
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--color-border-light);
        box-shadow: 0 10px 25px var(--color-shadow-light);
        transition: all 0.4s ease-in-out;
    }

    @media (max-width: 992px) {
        order: 1;
    }

    &:hover img {
        transform: scale(1.03) rotateZ(2deg);
        box-shadow: 0 15px 35px var(--color-shadow-medium);
        border-color: var(--color-accent);
    }
`;

export const H1 = styled.h1`
    font-family: var(--font-primary);
    font-size: clamp(48px, 6vw, 66px);
    font-weight: 800;
    line-height: 1.1;
    color: var(--color-text);

    .colorAccent {
        color: var(--color-accent);
    }

    @media (max-width: 576px) {
        font-size: clamp(38px, 9vw, 48px);
    }
`;

export const P = styled.p`
    font-size: clamp(18px, 2.5vw, 25px);
    line-height: 1.6;
    font-family: var(--font-secondary);
    color: var(--color-secondary-text);
    margin-top: 15px;

    ${props => props.$isInit && `
        font-size: clamp(22px, 3vw, 30px);
        font-weight: 600;
        color: var(--color-text);
    `}

    ${props => props.$isDescribe && `
        color: var(--color-secondary-text);
        margin-top: 30px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    `}
`;