import React from "react";
import { NavLink } from "react-router-dom";

const SmurfHeader = () => {
  return (
    <header className="header">
      <div className="headliner">
        <h1>Smurfs</h1>
      </div>
      <div className="smurf-menu">
        <NavLink to="/village">Village</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </div>
    </header>
  );
};
export default SmurfHeader;
