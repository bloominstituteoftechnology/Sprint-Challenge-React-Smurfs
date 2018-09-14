import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
  <h2>Welcome!!!</h2>
  <h3>You have been invited to enter the Smurf Village!</h3>

  <Link to="/smurfs">Hooray!</Link>
  </div>
  )
}
 
export default Header;