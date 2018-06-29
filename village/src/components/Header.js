import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/smurfenter.png';

const H2 = styled.h2`
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 50px;
  text-shadow: 3px 3px 5px #0a1f42;
  margin-top: 30%px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const Home = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const StyledImg = styled.img`
  width: 40%;
  margin-top: 10%px;
`

const Header = () => {
  return (
    <Home>
      <H2>Hello Adventurer,
          <br/>Welcome to the hidden village of the Smurfs!</H2>
      <StyledLink to="/smurfs"><StyledImg src={logo} alt="Enter" /></StyledLink>
    </Home>
  )
}

export default Header;