import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2>Welcome Stranger to The Smurfy Village!</h2>
      <Link to = '/smurfs'>
      <button>Explore The Village</button>
      </Link>
    </div>
  );
};

export default Header;
