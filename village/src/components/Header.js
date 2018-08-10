import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="home">
      <h2>Welcome to the Smurf Village!</h2>
      <Link to="/smurfs"><button>Enter Village</button></Link>
    </div>
  )
}

export default Header;
