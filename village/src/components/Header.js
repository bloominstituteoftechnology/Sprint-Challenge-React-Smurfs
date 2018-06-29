import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import "../App.css";

const Header = () => {
  return (
    <div className="App">
    <h2>Welcome to the Smurf village!</h2>
    <Router>
      <Link to="/smurfs" onClick={() => window.location.reload()}>Enter the Village</Link>
    </Router>
    </div>
  )
}
 
export default Header;