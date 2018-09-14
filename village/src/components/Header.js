// React
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './Header.css';

const Header = () => {
  return(
    <div className = 'header fade-in'>
      <h2>Welcome, Guest, to Smurf Village!</h2>
      <div className = 'nav-links-div'>
        <NavLink exact to = '/' activeClassName = 'active-link'>Main Page</NavLink>
        <NavLink to = '/smurfs' activeClassName = 'active-link'>Smurf Village</NavLink>
        <NavLink to = '/smurf-form' activeClassName = 'active-link'>Add New Smurf</NavLink>
      </div>
    </div>
  );
}

export default Header;
