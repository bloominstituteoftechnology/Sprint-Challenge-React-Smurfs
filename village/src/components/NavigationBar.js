import React from "react";
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
   return(
      <div>
         <NavLink to="/">Smurf Village</NavLink>
         <NavLink to="/smurf-form">Add Smurf</NavLink>
      </div>
   )
}

export default NavigationBar;