import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'

const StyledLink = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  padding: 10px 20px;
  margin-left: 10px;
  text-decoration: none;
  background-color: black;  
  text-transform: capitalize;
  &:hover{
    color: blue;
  }
`;

const Header = () => (
  
  <div className="header">
    <h2>Welcome to Smurf Village.</h2>
    <StyledLink to="/smurfs"> visit Village </StyledLink>
    <StyledLink to="/addSmurf">Add Smurf</StyledLink>
  </div>
)
 
export default Header;