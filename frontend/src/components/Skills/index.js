import React from "react"
import skillsData from "../../data/skillsData"
import { P, SkillItem, SkillsGrid, SkillsSection, StyledProgressBar } from "./styles"

function Skills() {
  const proficiencyLevels = [
    { level: "beginner", level_id: 1, value: 25 },
    { level: "basic", level_id: 2, value: 40 },
    { level: "foundational", level_id: 3, value: 55 },
    { level: "intermediate", level_id: 4, value: 70 },
    { level: "advanced", level_id: 5, value: 85 },
    { level: "expert", level_id: 6, value: 100 },
  ]

  return (
    <SkillsSection id="skills">
      <h1 className="section-title">Skills</h1>
      <SkillsGrid>
        {skillsData?.map((skill, index) => {
          const proficiencyDetail = proficiencyLevels.find((level) => level.level === skill.level)
          if (!proficiencyDetail) {
            console.warn(
              `Nie znaleziono poziomu zaawansowania dla ID: ${skill.level_id} dla umiejętności: ${skill.name}`
            )
            return null
          }

          return (
            <SkillItem key={index} className="app-card">
              <h2>{skill.name}</h2>
              <P>{skill.level}</P>
              <StyledProgressBar now={proficiencyDetail.value}></StyledProgressBar>
            </SkillItem>
          )
        })}
      </SkillsGrid>
    </SkillsSection>
  )
}

export default Skills
