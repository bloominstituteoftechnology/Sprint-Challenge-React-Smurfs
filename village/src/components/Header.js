import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <h2>Have a Very Smurfy day!</h2>
    <Link to='/smurfs'>Smurfs</Link>
    </div>
)
}
 
export default Header;