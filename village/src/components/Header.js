import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div className="village">
      <h2>Hello! Welcome to our village!</h2>
      <Link className="link" to="./smurfs">
        Come on in!
      </Link>
    </div>
  );
};

export default Header;
