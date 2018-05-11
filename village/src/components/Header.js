import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <h2>Welcome to our Smurf Villiage</h2>
      <Link to="/smurfs">Enter the villiage</Link>
    </div>
  )
}
 
export default Header;