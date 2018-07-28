import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurf Village!</h2>
      <h4><Link to="/smurfs">Enter Here</Link></h4>
    </div>
  )
}
 
export default Header;