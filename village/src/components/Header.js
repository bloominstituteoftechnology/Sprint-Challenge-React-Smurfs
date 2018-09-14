import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h2>Welcome to the Smurf Village</h2>
      <Link className="enter" to="./smurfs">
        Enter Village
      </Link>      
    </div>
  )
    
}
 
export default Header;