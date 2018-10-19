import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBar'>
            <NavLink to='/smurf-form'>Add a Smurf</NavLink>
            <NavLink to='/'>Current Village</NavLink>
        </div>
    )
}

export default NavBar;