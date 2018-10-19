import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = props => {
  return (
      <div>
         <NavLink exact  to={'/'} >Home</NavLink>
         <NavLink to={'/smurf-form'} >Smurf a Smurf</NavLink>
      </div>
      );
};

export default NavBar
