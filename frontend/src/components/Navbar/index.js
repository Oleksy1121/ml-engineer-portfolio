import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { StyledContainer } from './styles';

function TopNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <StyledContainer>
        <Navbar.Brand href="#home" className='brand'>ML Engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='link'>About</Nav.Link>
            <Nav.Link href="#skills" className='link'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='link'>Projects</Nav.Link> 
            <Nav.Link href="#contact" className='link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  );
}

export default TopNavbar;
