import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
