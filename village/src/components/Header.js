import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return <div>
            <h2>Welcome to Our Smurf Village</h2>
            <Link to="/smurfs" >View Smurfs</Link>
         </div>

}

export default Header;