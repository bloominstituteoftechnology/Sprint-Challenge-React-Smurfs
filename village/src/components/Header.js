import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h2>Welcome to SmurfVillage. Where would you like to go?</h2>
      <Link to='/add'>Join Us</Link>
      <Link to='/smurfs'>Current Members</Link>
    </div>
  )
}
 
export default Header;