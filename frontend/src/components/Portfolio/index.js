import React from 'react'
import { PortfolioContainer } from './styles'
import Home from '../Home'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import About from '../About'

function Portfolio() {
  return (
    <PortfolioContainer id='portfolio'>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </PortfolioContainer>

  )
}

export default Portfolio
