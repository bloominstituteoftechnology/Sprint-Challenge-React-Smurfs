import React from 'react';
import { NavLink } from 'react-router-dom' 

const Header = () => {
  return <h2>Enter your village by clicking <NavLink to="/smurfs">here</NavLink></h2>
}
 
export default Header;