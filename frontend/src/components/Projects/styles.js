import { Badge } from "react-bootstrap";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 80%;
    margin: 100px auto;
    padding: 0 20px;
`;

export const ProjectCard = styled.div`
    width: 100%;
    background: var(--color-card-bg);
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 20px;
        margin: 30px auto;
    }
`;

export const ProjectTitle = styled.h2`
    width: 100%;
    font-size: clamp(24px, 4vw, 32px);
    margin-bottom: 25px;
    color: var(--color-heading);
    text-align: center;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;

export const ProjectColumns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DescriptionContainer = styled.div`
    flex: 1;
    margin-right: 40px;
    color: var(--color-text-secondary);
    line-height: 1.6;

    p {
        margin-bottom: 1em;
    }

    @media (max-width: 992px) {
        margin-right: 0;
        margin-bottom: 30px;
        width: 100%;
    }
`;

export const SkillBadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`;

export const SkillBadge = styled(Badge)`
    background-color: var(--color-accent);
    color: var(--color-bg);
    font-size: 0.85em;
    padding: 6px 12px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
`;

export const ThumbnailContainer = styled.div`
    width: 45%;
    flex-shrink: 0;
    text-align: center;

    a {
        color: var(--color-accent);
        text-decoration: none;
        margin-top: 15px;
        display: inline-block;
        font-size: 0.9em;
        &:hover {
            text-decoration: underline;
        }
    }

    h6 {
        margin: 0;
        font-weight: normal;
    }

    @media (max-width: 992px) {
        width: 80%;
        max-width: 400px;
        margin-top: 20px;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    a & {
        display: block;
        text-decoration: none;
        border: 2px solid transparent;
        &:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            border-color: var(--color-accent);
        }
    }
`;