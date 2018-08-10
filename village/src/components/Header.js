import React from 'react';
import {  Link } from "react-router-dom";

const Header = () => {
  return (
  <div>
    <h2>Greetings! Please Join Us in the Village </h2>
    <Link to="/village"> Enter...</Link>
  </div>
  )
}
 
export default Header;