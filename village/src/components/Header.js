import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to the esteemed Smurf Village!</h2>
      <Link to="/smurfs">Enter the Smurf Village!</Link>
    </div>
  );
};

export default Header;
