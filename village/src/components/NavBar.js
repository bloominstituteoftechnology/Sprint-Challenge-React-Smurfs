import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = props =>{
    return(
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/smurf-form">Add New</NavLink>
        </div>
    )
}

export default NavBar;