import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = props => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink exact to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/smurf-form" className="navLink">
          {props.editing ? 'Update Smurf' : 'Add Smurf'}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
