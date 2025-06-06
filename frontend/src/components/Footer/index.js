import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FooterWrapper, IconLink, Copyright } from './styles'

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <IconLink href="m.oleszczyk@o2.pl">
              <FaEnvelope />
            </IconLink>          
            <IconLink href="https://www.linkedin.com/in/marcin-o-2aaa75208/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="https://github.com/Oleksy1121" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </IconLink>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Copyright>
              © {new Date().getFullYear()} Marcin Oleksy. All rights reserved.
            </Copyright>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
