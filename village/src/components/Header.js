import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Smurf Village</NavLink>
      <NavLink to='/smurf-form'>Add a Smurf to the Village</NavLink>
    </nav>
  );
}
 
export default Header;
