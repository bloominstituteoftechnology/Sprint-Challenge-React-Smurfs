import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return ( 
        <header className="navigation-wrapper">
            <NavLink to="/" activeClassName="">Home</NavLink>
            <NavLink to="/smurf-form" activeClassName="">Add Smurf</NavLink>
        </header>
     );
}
 
export default NavBar;