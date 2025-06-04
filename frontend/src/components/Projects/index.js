import React from "react"
import projectsData from "../../data/projectsData"


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
        <ProjectsContainer>
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

                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
                        </DescriptionContainer>

                        <ThumbnailContainer>
                            <ThumbnailImage
                                src={project.thumbnail}
                                alt="bbb"
                            ></ThumbnailImage>
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
