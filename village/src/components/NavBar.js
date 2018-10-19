import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = props =>{
    return(
        <div className="nav-bar">
            <Link to="/">Home</Link><br />
            <Link to="/smurf-form">Add New</Link>
        </div>
    )
}

export default NavBar;