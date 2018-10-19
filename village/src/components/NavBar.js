import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/smurf-form">Add Smurf</NavLink>
  </nav>
);

export default NavBar;
