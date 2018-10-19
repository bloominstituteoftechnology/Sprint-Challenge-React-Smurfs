import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="Nav__link" to="/">
        Home
      </Link>
      <Link className="Nav__link" to="/smurf-form">
        Add a Smurf
      </Link>
    </div>
  );
};

export default Nav;
