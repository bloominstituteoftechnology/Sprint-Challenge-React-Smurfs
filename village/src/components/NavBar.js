import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
`;

const NavBar = () => {
  return (
    <Header>
      <NavLink to='/'>Smurf Village</NavLink>
      <NavLink to='/smurf-form'>Smurf Form</NavLink>
    </Header>
  );
};

export default NavBar;
