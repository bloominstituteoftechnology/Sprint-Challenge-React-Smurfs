import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurf Village! <br/> Record incoming smurfs below.</h2>
      <button>
        <Link to="/smurfs">Click Here to Enter the Smurf Village!</Link>
      </button>
    </div>

  )
}
 
export default Header;