import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <NavLink exact className="link" to="/"> Home </NavLink>
      <NavLink className="link" to="/smurfs-form"> Add Smurf</NavLink>
    </NavigationContainer>
  )
}

export default Navigation;
