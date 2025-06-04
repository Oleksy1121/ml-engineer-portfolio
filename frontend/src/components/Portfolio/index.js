import React from 'react'
import { PortfolioContainer } from './styles'
import Navbar from '../Navbar'
import Home from '../Home'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

function Portfolio() {
  return (
    <PortfolioContainer>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </PortfolioContainer>

  )
}

export default Portfolio
