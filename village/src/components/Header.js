import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h2>Welcome to Smurf Village!</h2>
      <Link to='/Smurfs'>Enter Village</Link>
    </div>
  );
}
 
export default Header;