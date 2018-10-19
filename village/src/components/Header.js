import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Header = () => {
return (
  <header className='header'>
    <NavLink to='/village'>Village</NavLink>
    <NavLink to='/smurf-form'>Add Smurf</NavLink>
    <h1>Smurfs</h1>
  </header>
)
}
export default Header;
