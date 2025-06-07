import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 100%;
`

export const AboutCard = styled.div`
  color: var(--color-primary-text);
  text-align: left;

  p {
    color: var(--color-secondary-text);
    font-family: var(--font-secondary);
    font-size: 1.2rem;
  }
`

export const ContextContainer = styled.div`
  display: grid;
  /* grid-template-areas:
    "title image"
    "text image"; */


    grid-template-areas: ${({$reverse}) => 
    $reverse?


    `
      "image title"
      "image text";
    ` 

    :


    `
      "title image"
      "text image";
    ` 



    };


  h2 {
    grid-area: title;
  }

  img {
    grid-area: image;
    width: 300px;
    border: 1px solid var(--color-secondary-text);
    border-radius: 12px;
    box-shadow: 0 6px 15px var(--color-shadow-light);
    margin: auto;
    margin: ${props => props.$reverse ? "0 50px 0 0": "0 0 0 50px"};


    &:hover {
      box-shadow: 0 8px 15px var(--color-shadow-medium);
      border-color: var(--color-accent);
    }
  }
  p {
    grid-area: text;
  }

  @media (max-width: 1200px) {
    grid-template-areas:
      "title"
      "image"
      "text";

    img {
      margin: auto auto 20px auto;
      width: 450px;
    }
  }
`
