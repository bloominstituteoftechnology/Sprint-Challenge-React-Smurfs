import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <h2>Welcome Stranger</h2>
      <NavLink className="nav-item" activeClassName="selected" to="/smurfs">Enter Smurf Village</NavLink>
    </div>
  );
}

export default Header;