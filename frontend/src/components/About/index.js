import React from "react"
import { AboutCard, AboutContainer, ContextContainer } from "./styles"
import gallup from "../../assets/gallup.jpg"
import university from "../../assets/university.jpg"
import dataAnalyze from "../../assets/data-analize.jpg"
import mountain from "../../assets/mountain.jpg"

function About() {
  return (
    <AboutContainer id="about">
      <h1 className="section-title">About me</h1>

      <AboutCard className="app-card">
        <ContextContainer>
          <h2>My Journey into AI/ML</h2>
          <p>
            My fascination with AI and machine learning began during my Master’s studies in{" "}
            <strong>Automation and Robotics</strong> at <strong>Poznań University of Technology</strong>, where I
            specialized in <strong>Intelligent Systems</strong>. This program placed a strong emphasis on machine
            learning algorithms, artificial intelligence, and computer vision, laying a solid foundation for my further
            development.
          </p>
          <img src={university} alt="university"></img>
        </ContextContainer>

        <ContextContainer $reverse>
          <h2>Practical Experience & Continuous Growth</h2>
          <p>
            I honed my skills working with data as a <strong>Senior Equipment Engineer</strong> at{" "}
            <strong>LG Energy Solution</strong>, where effective data analysis was crucial for making quick and
            well-informed decisions in a dynamic production environment. Currently, I pursue AI and ML projects as a
            hobby, constantly expanding my skills through practical applications. To better visualize and present my
            work, I started learning <strong>React</strong>, which led to the creation of this portfolio.
          </p>
          <img src={dataAnalyze} alt="data analyze"></img>
        </ContextContainer>

        <ContextContainer>
          <h2>My Strengths</h2>
          <p>
            My passion and commitment are also reflected in the results of the <strong>Gallup StrengthsFinder</strong>{" "}
            test, which highlighted my natural talents: <em>Futuristic, Maximizer, Focus, Input</em>, and{" "}
            <em>Adaptability</em>. I believe these traits enable me to effectively transform visions into tangible
            projects.
          </p>

          <img src={gallup} alt="gallup"></img>
        </ContextContainer>

        <ContextContainer $reverse>
          <h2>Beyond the Code</h2>
          <p>
            Outside of work, I recharge in nature—especially walking through parks and forests—and by staying physically
            active. This helps me maintain a fresh mind and a creative approach to challenges.
          </p>
          <img src={mountain} alt="mountain"></img>
        </ContextContainer>
      </AboutCard>
    </AboutContainer>
  )
}

export default About
