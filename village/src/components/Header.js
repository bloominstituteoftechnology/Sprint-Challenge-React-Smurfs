import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 20px;
  font-weight: bold;
  display: block
  margin: 48px;
  text-decoration: none;
  text-transform: capitalize;
  &:hover{
    color: black;
  }
`;

const Header = () => (
  
  <div>
    <h2>Welcome to Smurf Village.</h2>
    <StyledLink to="/smurfs"> visit Village </StyledLink>
    <StyledLink to="/addSmurf">Add Smurf</StyledLink>
  </div>
)
 
export default Header;