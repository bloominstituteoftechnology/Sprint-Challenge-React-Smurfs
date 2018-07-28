import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
    {/* No idea why this link won't show up  */}
    <Link to="/smurfs">Welcome to our Smurf Village!</Link>
    </div>
  );
}
 
export default Header;