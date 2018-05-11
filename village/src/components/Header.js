import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/smurfs">Village</Link>
      <Link to="/addsmurf">New Smurf!</Link>
    </div>
  )
}
 
export default Header;