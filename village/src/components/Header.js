import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header>
      <h2>Welcome to the Smurf Village!</h2>
      <Link to={`${props.match.url}village`}>Enter the Village</Link>
    </header>
);

export default Header;
