import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
  <div>
  <h2>Welcome to Smurf Village. Have a Smurfy day!</h2>
  <Link to='/smurfs'>Secret Entry to Village</Link>
  </div>
)
}

export default Header;
