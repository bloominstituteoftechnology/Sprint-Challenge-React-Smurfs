import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
return (
  <header className='header'>
    <nav>
    <NavLink to='/village'>Village</NavLink>
    <NavLink to='/smurf-form'>Add Smurf</NavLink>
  </nav>
    <h1>Smurfs</h1>
  </header>
)
}
export default Header;
