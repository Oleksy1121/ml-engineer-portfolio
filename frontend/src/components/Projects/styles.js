import { Badge } from "react-bootstrap";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 100%;

    background: var(--color-bg);

    @media (max-width: 768px) {
        margin-top: 80px;
        padding: 0 15px;
    }
`;

export const ProjectCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

export const ProjectTitle = styled.h2`
    width: 100%;
    font-size: clamp(26px, 4vw, 36px);
    margin-bottom: 20px;
    color: var(--color-text);
    text-align: center;
    font-family: var(--font-primary);
    font-weight: 600;

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
    gap: 40px;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

export const DescriptionContainer = styled.div`
    flex: 1;
    color: var(--color-secondary-text);
    line-height: 1.7;
    font-size: 1.05em;
    font-family: var(--font-secondary);

    p {
        margin-bottom: 1em;
    }

    @media (max-width: 992px) {
        width: 100%;
        margin-bottom: 25px;
    }
`;

export const SkillBadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 25px;
`;

export const SkillBadge = styled(Badge)`
    background-color: var(--color-accent);
    color: var(--color-bg);
    font-size: 0.8em;
    padding: 7px 14px;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 5px var(--color-shadow-light);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #2F73E6;
        transform: translateY(-2px);
        cursor: default;
    }
`;

export const ThumbnailContainer = styled.div`
    width: 45%;
    flex-shrink: 0;
    text-align: center;
    position: relative;

    a.github-link {
        color: var(--color-secondary-text);
        text-decoration: none;
        margin-top: 15px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 1em;
        font-weight: 500;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
            color: var(--color-accent);
            transform: translateY(-2px);
        }
    }

    @media (max-width: 992px) {
        width: 80%;
        max-width: 450px;
        margin-top: 25px;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, filter 0.3s ease;

    object-fit: cover;

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