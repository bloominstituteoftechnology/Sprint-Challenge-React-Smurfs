import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/smurf-form">Form</NavLink>
  </header>
);

export default Header;
