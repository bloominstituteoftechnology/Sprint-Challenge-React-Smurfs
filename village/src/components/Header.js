import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
   <h2>Welcome to Smurf Village.</h2>
  <Link to='/smurfs'>
  <button>See the Village </button>
  </Link>
  </div>
);
}
 
export default Header;