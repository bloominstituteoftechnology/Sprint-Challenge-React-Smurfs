import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="welcome">
    <h2>Welcome to the Darkside.</h2>
    <Link to="/smurfs">Dark Smurf Village</Link>
    </div>
  )
}
 
export default Header;