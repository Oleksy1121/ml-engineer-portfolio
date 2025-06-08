import { Badge } from "react-bootstrap"
import styled from "styled-components"

export const ProjectsContainer = styled.div`
  width: 100%;

  h2 {
    font-size: 36px;
    color: var(--color-text);
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 0 15px;
  }
`

export const ProjectCard = styled.div`
  width: 100%;
  text-align: justify;
`

export const ProjectColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const DescriptionContainer = styled.div`
  flex: 1;
  color: var(--color-secondary-text);
  line-height: 1.7;
  font-size: 1.05em;
  font-family: var(--font-secondary);

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 25px;
  }
`

export const SkillBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`

export const SkillBadge = styled(Badge)`
  background-color: var(--color-accent) !important;
  color: var(--color-bg);
  font-size: 0.8em;
  padding: 7px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px var(--color-shadow-light);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    cursor: default;
  }
`

export const ThumbnailContainer = styled.div`
  width: 45%;
  text-align: center;

  @media (max-width: 992px) {
    width: 80%;
    max-width: 450px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const GithubLink = styled.a`
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
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  object-fit: cover;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-accent);
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
