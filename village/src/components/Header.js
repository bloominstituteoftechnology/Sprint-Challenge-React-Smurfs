import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
  <h1>Welcome To The Village</h1>
  <Link to={`/smurfs`}>Smurf Residents</Link>
  </div>
  )
}
 
export default Header;