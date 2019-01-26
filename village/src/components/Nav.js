import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className='navigation'>
      <Link to='/'>Smurf Village</Link>
      <Link to='/form'>Add a Smurf</Link>
    </nav>
  );
}

export default Nav;
