import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <h1>Welcome to Smurf Village</h1>
        <h4>Enter below:</h4>
        <p>Warning: smurfs are larger than they appear</p>

        <Link to="/smurfs">Enter</Link>
  </div>
  );
}

export default Header;