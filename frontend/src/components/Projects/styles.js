import { Badge } from "react-bootstrap"
import styled from "styled-components"

export const ProjectsContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
`

export const ProjectCard = styled.div`
    width: 100%;
    text-align: left;
    margin: 50px auto;
`

export const ProjectTitle = styled.h1`
    width: 100%;
    font-size: 28px;
`

export const SkillBadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export const SkillBadge = styled(Badge)`
    background-color: var(--color-accent);
    color: var(--color-bg);
    font-size: 12px;
    margin-bottom: 12px;
`

export const ThumbnailContainer = styled.div`
    width: 40%;
`

export const DescriptionContainer = styled.div`
    width: 60%;
    margin-right: 50px;
`

export const ProjectColumns = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`

export const ThumbnailImage = styled.img`
    height: 100%;
    max-height: 250px;



`