import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className='navigation'>
      <NavLink exact to='/' activeClassName="selected">Smurf Village</NavLink>
      <NavLink to='/smurf-form' activeClassName="selected" >Add a Smurf</NavLink>
    </nav>
  );
}

export default Nav;
