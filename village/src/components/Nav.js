import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="nav">
      {/* <NavLink className="nav__link" to="/">
        Home
      </NavLink> */}
      <NavLink className="nav__link" to="/smurfs">
        Smurf List
      </NavLink>
      <NavLink className="nav__link" to="/smurfs-form">
        Add Smurf
      </NavLink>
    </nav>
  );
};

export default Nav;
