import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column; /* <-- zmiana */
  margin: 50px auto;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`

export const DigitPredictiorContainer = styled.div`
    padding: 30px;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 992px) {
        padding: 20px;
    }
`

export const Header = styled.h1`
    text-align: center;
    color: var(--color-text);
    font-family: var(--font-primary);
    font-size: 40px;
    margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

`

export const Button = styled.button`
    flex: 1;
    height: 50px;
    font-size: 1.5em;
    font-weight: 600;
    background: transparent;
    border: 2px solid var(--color-accent);
    border-radius: 8px;
    color: var(--color-accent);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background: var(--color-accent);
        color: var(--color-bg);
        border: 2px solid var(--color-accent);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }
`
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
