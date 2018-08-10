import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (<div>
  <h2>Smurftown is excited to have you!</h2>
    <button><Link to = "/smurfs">Enter the Smurf Village</Link></button> 
  </div>)
}
 
export default Header;