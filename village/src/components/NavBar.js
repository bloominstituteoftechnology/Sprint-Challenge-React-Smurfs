import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Bar = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: blue;

  a {
    padding: 0 20px;

    &.active {
      color: black;
  }
  }
`;

const NavBar = (props) => {
  return (
    <Bar>
      <NavLink to="/">Smurfs</NavLink>
      <NavLink to="/smurf-form">Add New Smurf</NavLink>
    </Bar>
  )
}

export default NavBar;
