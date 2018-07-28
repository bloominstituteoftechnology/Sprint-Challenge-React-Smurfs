import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Get Your Smurf Butt In Here!</h2>
      <h4>Click The Button To Enter</h4>
      <Link to="/smurfs">
        <button>Smurf Village</button>
      </Link>
    </div>
  )
}
 
export default Header;