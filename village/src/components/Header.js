import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
  <div className = "header-wrapper">
  <h2>You are about to enter the Village of Smurfs
  </h2>

      <button>
        <NavLink exact to = "/smurfs" activeClassName = "activeNavBUtton"> 
          Enter the Village
        </NavLink>
      </button>
  
  </div>
  )}
 
export default Header;