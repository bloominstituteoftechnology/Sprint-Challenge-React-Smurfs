import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper } from '../styles/commonStyles';

const Nav = () => {
  return ( 
    <NavWrapper>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/smurf-form'>Add Smurf</NavLink>
    </NavWrapper>
   );
}
 
export default Nav;