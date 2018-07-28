import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Welcome to Smurf Village</h1>
      <h3>Smurfs are little blue creatures who live in a village made of mushrooms, lead by Papa Smurf.</h3>
      <Link to='/smurfs'>Enter Smurf Village</Link>
    </div>
  )
}
 
export default Header;