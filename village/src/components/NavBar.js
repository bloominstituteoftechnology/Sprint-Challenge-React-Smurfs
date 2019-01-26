import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addsmur">Add Smurf</NavLink>
    </nav>
  );
};

export default NavBar;
