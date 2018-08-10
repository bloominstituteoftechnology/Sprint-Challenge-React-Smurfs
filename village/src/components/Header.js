import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Hello. This is Smurf Village.</h2>
      <Link to="/smurfs">To the Village!</Link>
    </div>
  );
};

export default Header;
