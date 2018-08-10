import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <fragment>
      <h2>Welcome to the village of the Smurfs</h2>
      <div className="enter-btn"><Link to="/smurfs">Enter the Village!</Link></div>
    </fragment>
  );
}

export default Header;
