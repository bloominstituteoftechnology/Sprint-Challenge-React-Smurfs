import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurfs Village!</h2>
      <h4>
        Everyone is welcome here! You had better feel welcome. If you don't feel
        welcome, we're going to have serious problems. Please, just make
        yourself at home.
      </h4>
      <Link to="/smurfs">Enter the Smurfs Village &rarr;</Link>
    </div>
  );
};

export default Header;
