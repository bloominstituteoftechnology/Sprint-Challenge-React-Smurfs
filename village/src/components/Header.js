import React from 'react';
import {  Link } from "react-router-dom";

const Header = () => {
  return (
  <div>
    <h2>You are welcomed guest in the smurf village!</h2>
    <Link to="/village">Please Enter...</Link>
  </div>
  )
}
 
export default Header;