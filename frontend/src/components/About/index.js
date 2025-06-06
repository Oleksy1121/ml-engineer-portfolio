import React from "react"
import { AboutCard, AboutContainer } from "./styles"

function About() {
  return (
    <AboutContainer id="about">
      <h1 className="section-title">About</h1>

      <AboutCard className="app-card">
        <p>
          I am passionate about data analysis as well as solutions based on artificial intelligence and machine
          learning. I discovered my interest in working with data while holding the position of{" "}
          <strong>Senior Equipment Engineer</strong> at <strong>LG Energy Solution</strong>, where effective data
          analysis is crucial for making quick and well-informed decisions in a dynamic production environment.
        </p>
        <p>
          My fascination with AI and machine learning began during my Master’s studies in{" "}
          <strong>Automation and Robotics</strong> at <strong>Poznań University of Technology</strong>, where I
          specialized in <strong>Intelligent Systems</strong>. This program placed a strong emphasis on machine learning
          algorithms, artificial intelligence, and computer vision, laying a solid foundation for my further
          development.
        </p>
        <p>
          Currently, I pursue AI and ML projects as a hobby, constantly expanding my skills through practical
          applications. To better visualize and present my work, I started learning <strong>React</strong>, which led to
          the creation of this portfolio.
        </p>
        <p>
          My passion and commitment are also reflected in the results of the <strong>Gallup StrengthsFinder</strong>{" "}
          test, which highlighted my natural talents: <em>Futuristic, Maximizer, Focus, Input</em>, and{" "}
          <em>Adaptability</em>.
        </p>
        <p>
          Outside of work, I enjoy spending time in nature—especially walking through parks and forests—and staying
          physically active.
        </p>
      </AboutCard>
    </AboutContainer>
  )
}

export default About
