import React from 'react'
import { PortfolioContainer } from './styles'
import Navbar from '../Navbar'
import Home from '../Home'
import Skills from '../Skills'

function Portfolio() {
  return (
    <PortfolioContainer>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>

    </PortfolioContainer>

  )
}

export default Portfolio
