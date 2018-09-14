import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
  <div>
    <h2>Welcome to the Smurf Village humans!</h2>

    <Link to='/smurfForms'>The Village</Link>

  </div>
  );
}
 
export default Header;