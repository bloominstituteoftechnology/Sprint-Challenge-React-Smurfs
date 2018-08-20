import React from 'react';
import {Link} from 'react-router-dom';
import Smurfs from './Smurfs';


const Header = () => {
  return (
  <div>
  <h2>Welcome to Smurf Village!</h2>
  <Link to={`/smurfs`}> 
    {/* <Smurf /> */}
    <button>Head Into Smurf Village</button>
  </Link>
  </div>
  
)
}
 
export default Header;