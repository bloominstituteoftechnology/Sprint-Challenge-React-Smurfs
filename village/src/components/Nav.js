import React from 'react';
import {NavLink} from 'react-router-dom';

 const Navigation = () => {
   return(
     <div className="navBar">
     <div className="navBar-item"> 
      <NavLink to="/">Home</NavLink>
     </div> 
      <NavLink to="/add-smurf">Add Smurf</NavLink>
     </div>
  ) 
}

export default Navigation
 