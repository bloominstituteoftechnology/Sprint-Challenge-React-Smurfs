import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = props => {
    return (
        <>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/smurf-form'}>Form</NavLink>
            </nav>
        </>
    );
};

export default NavBar;
