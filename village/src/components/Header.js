import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
    <h2>Welcome to SmurfVille!</h2>
        <Link to='/smurfs'> 
          <button class='btn btn-info'> Check the village out! </button>
        </Link> 
  </div>
}
 
export default Header;