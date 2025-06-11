import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    text-align: center;
`;

export const ContactCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 992px) {
        flex-direction: column;
        gap: 30px;
        padding: 30px;
    }
`;

export const GetInTouch = styled.div`
    flex: 1;
    min-width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 20px;

    h2 {
        color: var(--color-text);
        margin-bottom: 20px;
    }

    p {
        line-height: 1.6;
        color: var(--color-secondary-text); 
        margin-bottom: 20px;
    }

    div {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: var(--color-secondary-text); 

        svg {
            margin-right: 15px;
            color: var(--color-accent); 
            font-size: 1.2rem;
        }

        a {
            color: inherit;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                color: var(--color-accent); 
            }
        }
    }

    @media (max-width: 992px) {
        min-width: unset;
        padding-right: 0;
    }
`;

export const MailContainer = styled.div`
    flex: 1;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
        color: var(--color-text); 
        font-size: 16px;
    }

    @media (max-width: 992px) {
        min-width: unset;
        padding-left: 0;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    gap: 20px;

    div {
        flex: 1;
        width: auto;
        margin: 0;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--color-border-light); 
    border-radius: 8px;
    font-size: 16px;
    background-color: var(--color-card-bg); 
    color: var(--color-text); 
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); 
    }

    &::placeholder {
        color: var(--color-light-gray);
    }
`;

export const FormTextArea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--color-border-light);
    border-radius: 8px;
    font-size: 16px;
    background-color: var(--color-card-bg);
    color: var(--color-text); 
    min-height: 120px;
    resize: vertical;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); 
    }

    &::placeholder {
        color: var(--color-light-gray); 
    }
`;

export const FormButton = styled.button`
    font-size: 20px;
    font-weight: 600;
    padding: 15px 30px;
    width: fit-content;
    margin-top: 20px;
    background-color: var(--color-accent);
    color: var(--color-bg); 
    border: 1px solid var(--color-accent); 
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    align-self: flex-end;

    &:hover {
        background-color: transparent; 
        color: var(--color-accent); 
        transform: translateY(-2px);
        box-shadow: 0 8px 15px var(--color-shadow-medium);
        border-color: var(--color-accent); 
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }
`;