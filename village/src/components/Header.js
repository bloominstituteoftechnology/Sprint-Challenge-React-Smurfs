import React from 'react';
import {Route, NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h2>Woaaaah! Welcome! Come, come! Enter Smurf Village!!</h2>
      <NavLink to='/smurfs'>Unwillingly enter Smurf Village</NavLink>
    </div>
  )
}
 
export default Header;