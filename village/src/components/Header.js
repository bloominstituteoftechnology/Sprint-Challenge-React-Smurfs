import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div>
      	<h1>Welcome to SMURF Village</h1>
      	<Link to= '/smurfs'><button>Check it Out</button></Link>
      </div>
    )
}

export default Header;
