import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>WELCOME TO SMURFVILLE!</h2>;
      <Link to={"/smurfs"}> To the smurfs </Link>
    </div>
  );
};

export default Header;
