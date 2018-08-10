import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Welcome to the land of Smurfs</h2>
      <Link to="/smurfs">Go to the Smurf Village</Link>
    </div>
  )
}
export default Header;