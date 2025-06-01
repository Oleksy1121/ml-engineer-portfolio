import styled from "styled-components";
import { Container } from "react-bootstrap";


export const StyledContainer = styled(Container)`
    background: var(--color-bg);
    border-bottom: 1px solid black;

    .brand, .link{
        color: var(--color-text);
        font-size: 20px;
    }
`

