import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return <button className="smurf-village-btn"><Link to="/smurfs"> You are welcomed guests in the smurf village</Link></button> 
}
 
export default Header;