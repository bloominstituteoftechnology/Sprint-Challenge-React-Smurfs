import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
`

export const LinksContainer = styled.div`

`

export const Header = styled.h1`
  font-size: 3.8rem;
`

export const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  padding: 5px;

  &.active {
    color: blue;
  }
`