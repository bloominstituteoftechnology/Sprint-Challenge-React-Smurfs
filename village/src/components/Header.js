import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
  <div>
  <h2> Smurf Village! </h2>
  <Link to='/smurfs'>
    <button>Explore</button>
  </Link>
  </div>
  )
}
 
export default Header;