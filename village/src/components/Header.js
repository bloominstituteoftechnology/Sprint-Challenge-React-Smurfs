import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
return (
  <header className='header'>
    <nav>
    <NavLink to='/village'>
    <i className="fas fa-home"/>
    Village</NavLink>
    <NavLink to='/smurf-form'>
    <i className="fas fa-plus"/>
    Add Smurf</NavLink>
  </nav>
    <h1>Smurfs</h1>
  </header>
)
}
export default Header;
