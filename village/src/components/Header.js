import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h2>Welcome to Smurf Village!</h2>
      <img src="http://www.impulsegamer.com/articles/wp-content/uploads/2015/07/smurfs-620x350.jpg" />
      <Link to="/smurfs" className="link">Enter the Village</Link>
    </div>
  )
}
 
export default Header;