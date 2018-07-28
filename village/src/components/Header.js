import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
  <h2>Welcome! You are a very special guest in the Smurfs Village</h2>
  <Link to={`/smurfs`}>
  <button>Explore Village</button>
  </Link>
  </div>
)
}
 
export default Header;