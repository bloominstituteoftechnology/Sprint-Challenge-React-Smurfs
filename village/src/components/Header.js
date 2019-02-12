import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
      <h1>Hello Smurf World!</h1>
      <Link to="/smurfs">SmUrFs</Link>
  </div>
  )
}
 
export default Header;