import React, { useEffect, useState } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { NavHashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa"
import {SocialIconLink, StyledBrand, StyledNavbar, StyledNavLink, ThemeToggleButton} from './styles'

function TopNavbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode)
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <StyledNavbar expand="lg" className="top-navbar py-3 shadow-sm">
      <Container>
        <StyledBrand className="brand" as={Link} to="/">
          ML Engineer
        </StyledBrand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <StyledNavLink className="nav-link" as={NavHashLink} to="/#portfolio">About</StyledNavLink>
            <StyledNavLink className="nav-link" as={NavHashLink} to="/#skills">Skills</StyledNavLink>
            <StyledNavLink className="nav-link" as={NavHashLink} to="/#projects">Projects</StyledNavLink>
            <StyledNavLink className="nav-link" as={NavHashLink} to="/#contact">Contact</StyledNavLink>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <SocialIconLink href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={22} />
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={22} />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/your_github_profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
            </SocialIconLink>
            <ThemeToggleButton onClick={toggleTheme}>
              {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </ThemeToggleButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}

export default TopNavbar
