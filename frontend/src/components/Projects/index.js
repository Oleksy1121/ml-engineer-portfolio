import React from "react"
import projectsData from "../../data/projectsData"
import { Link } from "react-router-dom"

import {
  CallToActionLink,
  DescriptionContainer,
  GithubLink,
  ProjectCard,
  ProjectColumns,
  ProjectsContainer,
  SkillBadge,
  SkillBadgeContainer,
  ThumbnailContainer,
  ThumbnailImage,
} from "./styles"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h1 className="section-title">Projects</h1>

      {projectsData?.map((project, index) => (
        <ProjectCard key={index} className="app-card">
          <h2>{project.title}</h2>

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
                <ThumbnailImage src={project.thumbnail} alt={project.title}></ThumbnailImage>
              </Link>
              <GithubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
                <span>GitHub Repository</span>
              </GithubLink>
            </ThumbnailContainer>
          </ProjectColumns>
        </ProjectCard>
      ))}

      <CallToActionLink href="https://github.com/Oleksy1121?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
        <span>Check out all my projects on GitHub</span>
      </CallToActionLink>
    </ProjectsContainer>
  )
}
export default Projects
