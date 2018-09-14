import React from 'react';
import {Route, NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h2>Woaaaah! Welcome! Come, come! Enter Smurf Village!!</h2>
      <button onClick={()=>props.history.push('/smurfs')}>Unwillingly enter Smurf Village</button>
    </div>
  )
}
 
export default Header;