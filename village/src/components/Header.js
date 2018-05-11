import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Smurfcome to Smurf Village! </h2>
      <Link to='/smurfs'>Come On In! </Link>
    </div>
  )
}
 
export default Header;