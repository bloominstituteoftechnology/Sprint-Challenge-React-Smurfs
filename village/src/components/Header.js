import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <h2>Welcome to the Smurf Village</h2>
    <Link to='/smurfs'><button>Enter the Village</button></Link>
  </div>
  )
}
 
export default Header;