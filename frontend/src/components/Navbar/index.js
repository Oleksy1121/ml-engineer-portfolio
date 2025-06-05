import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { StyledContainer } from './styles';
import { NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';


function TopNavbar() {
  return (
    <Navbar expand="xxl" className="navbar">
      <StyledContainer>
        <Navbar.Brand as={Link} to="/" className='brand'>ML Engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavHashLink} to="/#portfolio" className='nav-link link'>About</Nav.Link>
            <Nav.Link as={NavHashLink} to="/#skills" className='nav-link link'>Skills</Nav.Link>
            <Nav.Link as={NavHashLink} to="/#projects" className='nav-link link'>Projects</Nav.Link> 
            <Nav.Link as={NavHashLink} to="/#contact" className='nav-link link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  );
}


export default TopNavbar;
