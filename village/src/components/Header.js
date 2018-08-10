import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <h2>The Smurf-tastic Smurf Directory!</h2>
      <NavLink to={`/smurfs/`}>
        ENTER!
      </NavLink>
    </div>
    
  ) 

}
 
export default Header;