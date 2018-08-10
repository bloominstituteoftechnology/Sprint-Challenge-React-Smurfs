import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Yo man, like... welcome to Smurf Village</h2>
      <Link to={"/smurfs"}>Come on in</Link>
    </div>
  );
};

export default Header;
