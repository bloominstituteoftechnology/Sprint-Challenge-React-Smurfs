import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Hello Friend! Welcome to the Smurf Village</h2>
      <h3>Stay as long as you like, but watch where you step!</h3>
      <div className="enter-button">
        <Link to="/smurfs">Enter Village</Link>
      </div>
    </div>
  );
};

export default Header;
