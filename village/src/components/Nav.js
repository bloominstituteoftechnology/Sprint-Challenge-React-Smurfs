import React from 'react'
import {
  NavContainer,
  LinksContainer,
  Header,
  StyledNavLink
} from '../styles/Nav'

const Nav = () => (
  <NavContainer>
    <Header>Smurf Village</Header>
    <LinksContainer>
      <StyledNavLink exact activeClassName="active" to="/">
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/smurf-form">
        Add Smurf
      </StyledNavLink>
    </LinksContainer>
  </NavContainer>
)

export default Nav
