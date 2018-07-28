import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <h2>Welcome to Smurfington</h2>
    <Link to="/smurfs">Smurfington</Link>
    </div>
)
}
 
export default Header;