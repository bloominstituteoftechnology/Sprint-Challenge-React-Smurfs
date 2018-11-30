import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (

    <div className='nav-bar'>

      <NavLink to='/'>Home</NavLink>
      <NavLink to='/smurf-form'>Add Form</NavLink>

    </div>

  );

}
