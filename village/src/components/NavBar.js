import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink exact to="/" activeClassName="activeNavButton a">
        <button className="links">Smurf Village</button>
      </NavLink>
      <NavLink to="/smurf-form" activeClassName="activeNavButton a">
        <button className="links">Smurf Form</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
