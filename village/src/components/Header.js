import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return( 
    <div>
      <h2>Welcome, guests, to the Smurf Village!</h2>
      <Link to='/smurfs'>Meet the Smurfs</Link>
    </div>
  );
}
 
export default Header;