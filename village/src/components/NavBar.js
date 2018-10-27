import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarHeader = styled.header`
  background-color: lightgrey;
  padding: 10px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const NavStyledLink = styled.nav`
  margin: 0px 20px;
  text-decoration: none;
  color: black;
`;

const NavBar = () => {
    return (
        <NavBarHeader>
          <NavLink to={'/'} exact >
            <NavStyledLink>
              Home
            </NavStyledLink>
          </NavLink>
          <NavLink to={'/SmurfForm'}>
            <NavStyledLink>
              Smurf Form
            </NavStyledLink>
          </NavLink>
        </NavBarHeader>
    )
}

export default NavBar;