import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__links">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
        <NavLink className="nav__link" to="/smurf-form">
          Add a Smurf
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
