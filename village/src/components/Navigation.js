import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return(
      <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-smurf">Add Smurf</NavLink>
      </div>
  ) 
}
 
export default Navigation;

