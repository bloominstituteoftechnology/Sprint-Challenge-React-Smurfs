import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <h2>Welcome to the  Smurftastic Smurf Village</h2>

      <Link to="/smurfs">Smurfs</Link>

    </div>
  );
}
 
export default Header;