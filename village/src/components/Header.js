import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome Stranger</h2>
      <NavLink to="/smurfs">Enter Smurf Village</NavLink>
    </div>
  );
}
 
export default Header;