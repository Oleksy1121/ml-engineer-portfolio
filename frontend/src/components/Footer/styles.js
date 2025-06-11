import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: var(--color-bg);
  padding: 20px 0;
  margin-top: 50px;
  border-top: 1px solid var(--color-border-light);
  text-align: center;
`

export const IconLink = styled.a`
  color: var(--color-text);
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: var(--color-accent);
  }
`

export const Copyright = styled.div`
  font-size: 0.9rem;
  color: var(--color-secondary-text);
  margin-top: 10px;
`
