import React from "react"
import {

    H6,

    SkillItem,

    SkillsGrid,
    SkillsSection,
    SkilltTitle,
    StyledProgressBar,
} from "./styles"


function Skills() {

    const proficiencyLevels = [
        {level: 'beginner', level_id: 1, value: 10},
        {level: 'foundational', level_id: 2, value: 35},
        {level: 'intermediate', level_id: 3, value: 55},
        {level: 'advanced', level_id: 4, value: 65},
        {level: 'expert', level_id: 5, value: 80},
        {level: 'master', level_id: 6, value: 100},
    ]


    const skillList = [
        { name: "Python", level: 'intermediate', type: "Language", variant: "info" },
        { name: "React", level: 'foundational', type: "Framework", variant: "primary" },

    ]

    return (
        <SkillsSection>
            <SkilltTitle>Skills</SkilltTitle>
            <SkillsGrid>
              {skillList?.map((skill, index) => {
                    const proficiencyDetail = proficiencyLevels.find(level => level.level === skill.level);
                    if (!proficiencyDetail) {
                        console.warn(`Nie znaleziono poziomu zaawansowania dla ID: ${skill.level_id} dla umiejętności: ${skill.name}`);
                        return null;
                    }

                    return(
                    <SkillItem key={index}>
                        <h2>{skill.name}</h2>
                        <H6>{skill.level}</H6>
                        <StyledProgressBar
                            now={proficiencyDetail.value}
                        ></StyledProgressBar>
                    </SkillItem>
                    )
              })}
                
            </SkillsGrid>
        </SkillsSection>
    )
}

export default Skills
