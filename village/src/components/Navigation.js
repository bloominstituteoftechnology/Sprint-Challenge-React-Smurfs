import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <div className="Nav">
        <h1>Welcome to the Village</h1>
        <div>
          <Link to="/">Smurfs</Link>
        </div>

        <div>
          <Link to="/smurf-form">Add a Smurf </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
