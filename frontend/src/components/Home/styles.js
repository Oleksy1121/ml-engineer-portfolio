import styled from "styled-components"

export const TextContainer = styled.div`
    text-align: left;
    margin-right: 50px;

    @media (max-width: 992px) {
        width: 100%; 
        margin-right: 0; 
        text-align: center;
        order: 2;
    }
`

export const HomeContainer = styled.div`
    margin: 100px auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column; 
        width: 95%; 
        text-align: center;
        padding: 20px 0; 
    }

`

export const ImageContainer = styled.div`
    width: 360px;
    height: 360px; 
    display: flex; 
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%; 
        object-fit: cover;
        border: 1px solid var(--color-light-gray);
    }

    @media (max-width: 992px) {
        order: 1;
    }
`

export const H1 = styled.h1`
    font-family: sans-serif;
    font-size: 66px;
    font-weight: 800;
    line-height: 1.1;

    .colorAccent {
        color:var(--color-accent);
    }

    @media (max-width: 992px) {
        font-size: 48px; 
    }

`

export const P = styled.p`
    font-size: 25px;
    color: var(--color-black);
    font-family: sans-serif;
    line-height: 1.5;

    ${props => props.$isInit &&`
        font-size: 30px;
        font-weight: 550;
    `}

    ${props => props.$isDescribe &&`
        color: var(--color-light-gray);
        margin-top: 30px;
        
    `}

`
