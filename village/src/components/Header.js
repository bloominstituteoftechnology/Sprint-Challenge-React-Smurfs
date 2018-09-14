import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="home">
      <h1>Welcome to Smurf Village</h1>
      <Link to='/smurfs' className="nav-link">Enter the Village</Link>
    </div>
     )
  }
   
  export default Header; 