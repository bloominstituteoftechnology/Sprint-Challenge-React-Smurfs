import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/smurfs" className="nav-link">Village</Link>
      <Link to="/addsmurf" className="nav-link">New Smurf!</Link>
    </div>
  )
}
 
export default Header;