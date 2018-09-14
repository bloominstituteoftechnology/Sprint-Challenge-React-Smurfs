import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome to Smurfs Village!</h2>
      <Link to='/smurfs'>Smurf Village</Link>
    </div>
  );
}
 
export default Header;