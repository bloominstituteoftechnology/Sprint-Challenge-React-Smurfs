import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/smurfs">
      <h2>Greetings, you are a welcomed guest in the Smurf Village!</h2>
    </Link>
    
  )
}
 
export default Header;