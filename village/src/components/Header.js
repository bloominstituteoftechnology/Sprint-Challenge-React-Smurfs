import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <h2>Laa Laaaaa La La La Laaaaa, Laaa La La La Laaaaaa</h2>
    <h3>Welcome to Smurf Village! We hope you have a Smurfy day!</h3>
    <Link to = '/smurfs'>Enter the village</Link>
  </div>
  )
}
 
export default Header;