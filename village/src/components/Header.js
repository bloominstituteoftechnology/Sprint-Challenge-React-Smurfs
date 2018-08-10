import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
    <h2>Hello! You are a welcome guest in Smurf Village.</h2>
    <Link to="/smurfs">Come on in</Link>
    </div>
}
 
export default Header;