import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Welcome to Smurf Village! Click the button to see whos here</h2>
      <Link to="/smurfs"><button>Village</button></Link>
    </div>)
}

export default Header;