import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  console.log(props);
  return (
    <div className="text-container">
      <h2>Laa Laaaaa La La La Laaaaa, Laaa La La La Laaaaaa</h2>
      <h3>Welcome to Smurf Village! We hope you have a Smurfy day!</h3>
      <Link to = '/village'>ENTER THE VILLAGE</Link>
    </div>
  )
}
 
export default Header;