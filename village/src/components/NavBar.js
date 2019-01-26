import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Smurf Village</NavLink>
      <NavLink to='/smurf-form'>Smurf Form</NavLink>
    </div>
  );
};

export default NavBar;
