import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
  <h2>Welcome to Smurf village</h2>
  <Link to='/smurfs'><button>View Smurfs</button></Link>
  <Link to='/smurf'><button>Add Smurfs</button></Link>
  </div>
}
 
export default Header;