import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
    <Link to="/smurfs"> Welcome to our Smurf Village! </Link>
    </div>
  );
}
 
export default Header;