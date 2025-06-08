import styled from "styled-components"
import { Navbar, Nav } from "react-bootstrap"

export const StyledNavbar = styled(Navbar)`
  background-color: var(--color-bg) !important;
  box-shadow: 0 3px 4px -3px var(--color-accent) !important;
  position: sticky !important;
  z-index: 1050 !important;
  top: 0;
`

export const StyledBrand = styled(Navbar.Brand)`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-text) !important;
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
    opacity: 0.8;
  }
`
export const StyledNavLink = styled(Nav.Link)`
  color: var(--color-accent) !important;
  margin: 0 0.5rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    opacity: 0.8;
  }
`

export const SocialIconLink = styled.a`
  color: var(--color-text) !important;
  font-size: 1.2rem;

  &:hover {
    opacity: 0.7;
  }
`

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text) !important;
  margin-left: 2rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
