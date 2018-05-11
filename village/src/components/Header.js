import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Welcome to Smurfiland!</h1>
      <Link to='/smurfs'>
        <button>Hello!</button>
      </Link>
  </div>
  )}
 
export default Header;