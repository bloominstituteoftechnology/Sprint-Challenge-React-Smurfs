import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0;
  margin: 0 30%;
  margin-bottom: 10px;
`;

const NavButton = styled.button`
  border-radius: 4px;
  background-color: #dfec24;
  font-size: 2rem;
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

const Navigation = props => {
  return (
    <NavDiv>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/smurfs">
        <NavButton>Smurfs</NavButton>
      </Link>
    </NavDiv>
  );
};

export default Navigation;
