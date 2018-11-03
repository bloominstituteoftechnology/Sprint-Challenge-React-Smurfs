import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return( 
        <div>
            <NavLink to ='/'>Smurf Village</NavLink>
            <NavLink to ='/smurf-form'>Add a Smurf</NavLink>
        </div>
        )
    }
    
    export default NavBar;