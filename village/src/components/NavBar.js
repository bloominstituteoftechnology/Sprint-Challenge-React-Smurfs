import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return( 
        <div className='NavBar'>
            <NavLink to ='/' style={{ textDecoration: 'none' }}>Smurf Village</NavLink>
            <NavLink to ='/smurf-form' style={{ textDecoration: 'none' }}>Add a Smurf</NavLink>
        </div>
        )
    }
    
    export default NavBar;