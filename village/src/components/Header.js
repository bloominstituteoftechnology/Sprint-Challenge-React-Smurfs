import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h2>Welcome to Smurf Village!</h2>
      <button><Link to = '/smurfvillage'>Enter Now</Link></button>
    </div>
  )
}
 
export default Header;