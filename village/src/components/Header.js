import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>
        You stumbled onto a growing Smurf Village. You are welcomed to move in!
      </h2>
      <Link to="/smurfs">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default Header;
