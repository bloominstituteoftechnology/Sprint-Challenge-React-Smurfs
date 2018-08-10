import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const SButton = styled(Button) `
  height: 40px;
  font-size: 24px;
  background: black;
  color: white;
`;

const H2 = styled.h2 `
  color: white;
  font-family: Bookman;
  font-size: 40px;
`;

const HeaderDiv = styled.div `
  margin: 50px auto;
  padding: 30px 0 100px;
  max-width: 1280px;
  width: 100%;
  height: 550px;
  background-image: url("http://features.cgsociety.org/newgallerycrits/g30/364330/364330_1362479295_large.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <H2>"Welcome to smurf village! We're so happy to have you!"</H2>
      <Link to='/smurfs'>
        <SButton>Enter Smurf Village</SButton>
      </Link>
    </HeaderDiv>
  )
}

export default Header;
