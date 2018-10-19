import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/smurf-form">
      {props.isEditing ? "Edit Smurf" : "Add Smurf"}
    </NavLink>
  </nav>
);

export default NavBar;
