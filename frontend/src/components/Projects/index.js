import React from "react"
import projectsData from "../../data/projectsData"
import { Link } from "react-router-dom"

import {
    DescriptionContainer,
    ProjectCard,
    ProjectColumns,
    ProjectsContainer,
    ProjectTitle,
    SkillBadge,
    SkillBadgeContainer,
    ThumbnailContainer,
    ThumbnailImage,
} from "./styles"

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <h1 className="section-title">Projects</h1>

            {projectsData?.map((project, index) => (
                <ProjectCard key={index}>
                    <ProjectTitle>{project.title}</ProjectTitle>

                    <ProjectColumns>
                        <DescriptionContainer>
                            <SkillBadgeContainer>
                                {project.skills?.map((skill, index) => (
                                    <SkillBadge key={index}>{skill}</SkillBadge>
                                ))}
                            </SkillBadgeContainer>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            />
                        </DescriptionContainer>

                        <ThumbnailContainer>
                            <Link to={project.linkToDemo}>
                                <ThumbnailImage
                                    src={project.thumbnail}
                                    alt={project.title}
                                ></ThumbnailImage>
                            </Link>

                            <a href={project.githubLink}>
                                <h6>{project.githubLink} </h6>
                            </a>
                        </ThumbnailContainer>
                    </ProjectColumns>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    )
}
export default Projects
