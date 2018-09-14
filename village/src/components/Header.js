import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/smurfs'>Smurf Village</Link>
      <h2>Welcome to Smurfs Village!</h2>
    </div>
  );
}
 
export default Header;