import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink exact to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/smurf-form" className="navLink">
          Add Smurf <i className="fas fa-plus fa-sm fa-fw" />{' '}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
