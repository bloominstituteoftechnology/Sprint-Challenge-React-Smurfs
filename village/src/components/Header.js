import React from 'react';
import { NavLink, Route } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurf Village</h2>
      <NavLink to="/smurfs">Enter into Smurf Village</NavLink>
    </div>
  );
}
 
export default Header;