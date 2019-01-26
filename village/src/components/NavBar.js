import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addsmurf">Add Smurf</NavLink>
    </nav>
  );
};

export default NavBar;
