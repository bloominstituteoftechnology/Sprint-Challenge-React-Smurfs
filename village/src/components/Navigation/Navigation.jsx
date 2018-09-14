import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink><br></br>
        <NavLink to="/smurf-form">Add new smurf</NavLink>
  </div>
  )
}
 
export default Navigation;