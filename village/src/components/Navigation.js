import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
<div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-smurf">Add Smurf</NavLink>
      </div>
  ) 
}
 
export default Navigation;

