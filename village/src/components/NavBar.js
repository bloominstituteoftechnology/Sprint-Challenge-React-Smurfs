import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/smurf-form">Smurf Form</NavLink>
    </div>
  );
};

export default NavBar;
