import React from 'react';
import {Link} from 'react-router-dom';
import './Smurfs.css';

const Header = () => {
  return( 
    <div className='header'>
  <h2>Welcome, friend!</h2>
  <Link to='/smurfs' style={{textDecoration: 'none', color: 'blue'}}>You may now enter the Smurf Village</Link>
  </div>
);
}
 
export default Header;