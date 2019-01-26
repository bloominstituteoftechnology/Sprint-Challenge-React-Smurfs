import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink className="navigation" exact activeClassName="selected" to="/">
        Home
      </NavLink>
      <NavLink className="navigation" activeClassName="selected" to="/addsmurf">
        Add Smurf
      </NavLink>
      <NavLink className="navigation" activeClassName="selected" to="/gargamel">
        Gargamel Powers
      </NavLink>
    </nav>
  );
};

export default NavBar;
