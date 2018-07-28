import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import "../App.css";

const Header = () => {
  return (
    <div className="App">
    <h2>Welcome to the Smurf village!</h2>
      <Link to="/smurfs" >Enter the Village</Link>
    </div>
  )
}
 
export default Header;