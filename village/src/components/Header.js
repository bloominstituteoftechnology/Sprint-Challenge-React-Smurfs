import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Header() {
  return (
    <div className='Header'>
        <h1 className='header-title'>Welcome To the Smurfs!</h1>
        <p>Enter the Village Below</p>

        <Link to="/smurfs">Enter</Link>
  </div>
  );
}

export default Header;