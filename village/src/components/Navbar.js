import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {

  return (

    <div className='nav-bar'>

      <NavLink
        activeStyle={{fontWeight: 'bold'}}
        exact
        to='/'>Home</NavLink>
      <NavLink
        activeStyle={{fontWeight: 'bold'}}
        to='/smurf-form'>Add Form</NavLink>

    </div>

  );

}
