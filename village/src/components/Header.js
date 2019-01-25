import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div className="home">
    <h1>Welcome to Smurf Village</h1>
    <h3>We hope you enjoy your stay</h3>
    <Link to='/smurfs'>Enter the Village</Link>
  </div>

  )
}
 
export default Header;