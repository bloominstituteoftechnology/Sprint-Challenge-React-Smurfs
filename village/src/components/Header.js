import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <h2>Sup and welcome to smurf land</h2>
    <p>u ready to bring on the dang smurfs?</p>
    <Link to='/smurfz'>
      <div>Leggo</div>
    </Link>
  </div>)
}
 
export default Header;