import React from "react";
import { Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Enter the world of Smurf</h2>
      <NavLink to="/smurfs">Click</NavLink>
    </div>
  );
};

export default Header;
