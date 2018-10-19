import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <NavLink to="/smurf-form" activeClassName="activeNavButton">
        Smurf Form
      </NavLink>
      <NavLink exact to="/" activeClassName="activeNavButton">
        Smurf Village
      </NavLink>
    </div>
  );
};

export default NavBar;
