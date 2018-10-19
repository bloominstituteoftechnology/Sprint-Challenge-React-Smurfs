import React from 'react';
import {NavLink} from 'react-router-dom'
const NavBar = props => {
  return (
    <nav>
        <label>Smurfs</label>
        <NavLink to = '/Smurfs'>
            <div>Smurfs List</div>
        </NavLink>
        <NavLink to="/SmurfForm">
            <div>Add Smurf</div>
        </NavLink>
    </nav>
    );
};



export default NavBar;