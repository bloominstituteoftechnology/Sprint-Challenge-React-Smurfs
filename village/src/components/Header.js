import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome to SmurfLand! While we're not too big on gramatical verbosity, it's still a pretty good place.</h2>
      <Link to='/smurfs'><button>Come On In!</button></Link>
    </div>
  );

}
 
export default Header;