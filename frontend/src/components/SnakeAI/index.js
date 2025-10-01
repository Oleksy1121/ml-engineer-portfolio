import React from 'react'
import { SnakeContainer, ContentRow, Gif, TextBlock, Divider, VideoSection, CallToActionLink } from './styles'
import { FaGithub } from "react-icons/fa"
import snakeGif from '../../assets/snake-demo.gif'

function SnakeAI() {
  return (
    <SnakeContainer className="app-card">
      <h1>Snake AI Project</h1>
      
      <ContentRow>
        <Gif src={snakeGif} alt="Snake AI Demo"/>
        <TextBlock>
          <p>
            This project implements an AI agent trained to play the classic Snake game using
            <strong> Reinforcement Learning (PPO)</strong>. I built a custom environment in Gymnasium
            with both image-based observations and a feature vector for better learning.
          </p>
          <p>
            The best model reached an average of <strong>3000 steps per episode</strong> and a mean reward
            of <strong>278</strong>, which means the snake can eat up to 140 apples in one run.
          </p>
          <p>
            Training progress was monitored with TensorBoard, and live rendering was implemented using Pygame.
          </p>
        </TextBlock>
      </ContentRow>

      <Divider />

      <VideoSection>
        <h1>Key Project Demonstration</h1>
        <p>
          In this video, I present the core elements of the SnakeAI project, including the 
          custom environment, training process, and a live demonstration of the agent playing Snake.
        </p>
        <video controls>
          <source src="https://storage.cloud.google.com/snake-ai-assets-oleksy1121/snakeAI-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoSection>

      <CallToActionLink href="https://github.com/Oleksy1121/SnakeAI" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
        <span>Check this project on GitHub</span>
      </CallToActionLink>

    </SnakeContainer>
  )
}

export default SnakeAI
