import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
    <h2>Welcome to the Smurf Village, honored guest!</h2>
    <Link to="/">Home</Link>
    <Link to="/smurfs">Enter the Smurf Village</Link>
    </div>

)}

export default Header;
