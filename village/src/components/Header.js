import React from 'react';
import {  Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <h2>Smufs Up Dude</h2>
    <Link to="/smurfs"> See the village</Link> <br/>
    <Link to="/add">Add a smurf</Link>
    </div>
  )
}

export default Header;
