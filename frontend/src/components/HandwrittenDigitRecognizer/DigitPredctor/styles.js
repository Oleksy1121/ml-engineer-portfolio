import styled from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    margin: 50px auto;
    border: 1px black var(--color-text);
    border-radius: 26px;
    width: 1200px;
    height: 900px;
    box-shadow: 0px 0px 30px var(--color-text);
    overflow: hidden;
`


export const DigitPredictiorContainer = styled.div`
    padding: 20px;
    width: 800px;
    background: none;
`

export const Header = styled.h1`
    text-align: center;
    color: var(--color-bg);
`

export const ButtonContainer = styled.div`
    margin: 50px auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 45%;
    height: 60px;
    font-size: 2.2em;
    font-weight: 500;
    background: none;
    border: 2px solid var(--color-text);
    border-radius: 10px;
    color: var(--color-text);
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover{
        background: var(--color-accent);
        color: white;
        border: 2px solid var(--color-accent);
    }
`