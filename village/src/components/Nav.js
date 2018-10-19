import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h3 className="nav__logo">S * M * U * R * F *</h3>

      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/smurf-form">
        Add a Smurf
      </NavLink>
    </div>
  );
};

export default Nav;
