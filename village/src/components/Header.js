import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>"Welcome to the smurf village! We're so happy to have you!"</h2>
      <Link to='/smurfs'>
        <button>Enter Smurf Village</button>
      </Link>
    </div>
  )
}

export default Header;
