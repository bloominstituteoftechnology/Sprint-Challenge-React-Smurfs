import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div className="village">
      <h2>Welcome to Smurf village!</h2>
      <Link className="link" to="./smurfs">
        Meet Smurfs!
      </Link>
    </div>
  );
};

export default Header;