import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurf Villiage</h2>
      <Link to={"/smurfList"}>Enter</Link>
    </div>
  );
};

export default Header;
