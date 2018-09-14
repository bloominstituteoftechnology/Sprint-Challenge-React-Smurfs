import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to Smurf Village!</h2>
      <Link to={`/smurfs`}><button className="button">Enter the Village</button> </Link>
    </div>
  )
}
 
export default Header;