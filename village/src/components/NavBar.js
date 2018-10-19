import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Smurfs</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
    );
}

export default NavBar;