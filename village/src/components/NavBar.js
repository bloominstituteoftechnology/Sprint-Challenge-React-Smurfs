import React from 'react';
import {NavLink} from 'react-router-dom'
const NavBar = props => {
  return (
    <nav>
<label>Smurfs</label>
<NavLink to="/SmurfForm">
  <div>add Smurf</div>
</NavLink>
<NavLink to = '/'>
  <div>Just smurfs</div>
</NavLink>

    </nav>
    );
};



export default NavBar;
