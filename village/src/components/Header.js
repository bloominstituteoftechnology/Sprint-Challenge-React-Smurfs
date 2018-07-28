import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
  <div>
    
  <h2>Welcome to the land of the fantastical Smurfs. Smurf Village looks forward to your patronage.</h2>
  <Link to="/">
  <button>Enter</button>
  </Link>
  </div>
  )
}
 
export default Header;