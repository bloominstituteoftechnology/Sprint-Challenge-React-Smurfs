import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to='/' className='navLink' activeClassName='active'>Smurf Village</NavLink>
      <NavLink to='/SmurfForm' className='navLink' activeClassName='active'>Add a Smurf</NavLink>
    </div>
  )
}


export default NavBar;