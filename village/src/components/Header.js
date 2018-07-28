import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <div>
  
  <h2>You are a welcomed guest in smurf village</h2>
  <Link to='/smurfs/'>
  <button>Enter Village</button>
  </Link>
  </div>
  )
}
 
export default Header;