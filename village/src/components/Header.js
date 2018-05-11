import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome to Smurf Village! </h2>
      <Link to='/smurfs'>Check it out >>> </Link>
    </div>
  )
}
 
export default Header;

