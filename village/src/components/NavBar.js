import React from 'react';
import {NavLink} from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return (
        <div className='navBar'>
            <NavLink className='navLink left' activeClassName='selectedLink' to='/smurf-form'>Add a Smurf</NavLink>
            <NavLink className='navLink right' activeClassName='selectedLink' exact to='/'>Current Village</NavLink>
        </div>
    )
}

export default NavBar;