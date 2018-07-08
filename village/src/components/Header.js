import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <h2>Welcome to Smurf Village!</h2>
      <Link to="/smurfs/add">Add smurf</Link>
    </div>

  )
}

export default Header;
