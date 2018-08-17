import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='village'>
      <h2>Hi! Welcome to Our Village!</h2>
      <Link classname='link' to='/smurfs'>
      Come on in!
      </Link>
    </div>
  );
};

export default Header;
