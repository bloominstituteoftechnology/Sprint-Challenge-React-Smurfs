import React from "react";

import { NavLink } from "react-router-dom";

const SmurfNav = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="link">
        <p>Visit the Village</p>
      </NavLink>
      <NavLink to="/smurf-form" className="link">
        <p>Add a Smurf</p>
      </NavLink>
    </div>
  );
};

export default SmurfNav;
