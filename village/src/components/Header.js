import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <Fragment>
      <h2>Welcome, Guest, to Smurf Village!</h2>
      <Link to = '/'>Go Home</Link>
      <Link to = '/smurfs'>Go to Smurf Village</Link>
    </Fragment>
  );
}

export default Header;
