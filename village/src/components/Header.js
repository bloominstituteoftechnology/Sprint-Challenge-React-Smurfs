import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Header = () => {
  return (
    <div className = 'smurfVillage'>
      <h2>Welcome to our Smurf village!</h2>
      <p>Guests are welcomed to...</p><Link className = 'link' to = './smurfs'>take a look around!</Link>
    </div>
  );
};

export default Header;
