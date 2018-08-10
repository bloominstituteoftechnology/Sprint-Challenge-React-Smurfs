import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <h2>We Must repopulate the Lost Village!!</h2>
      <Link to="/smurfs"><button>Let's Smurf</button></Link>
    </div>
  )
}
 
export default Header;