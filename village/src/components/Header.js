import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
  <div className = "header-wrapper">
  <h2>You are about to enter the Village of Smurfs
  </h2>
  <button> 
    
  <Link to="/smerfs" 
  activeClassName="activeNavButton">
  Enter the village 
  </Link>

  </button>
  </div>
  )}
 
export default Header;