import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink exact to='/' activeClassName='active'>Smurf Village</NavLink>
      <NavLink to='/smurf-form' activeClassName='active'>Add a Smurf to the Village</NavLink>
    </nav>
  );
};
 
export default Header;
