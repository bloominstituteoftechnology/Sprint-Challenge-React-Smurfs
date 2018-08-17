import React from 'react';
import {Link, Route} from 'react-router-dom';
import App from '../App'
const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurf Village</h2>
      <Link to="/Smurfs">
      <button>Smurf Here</button>
      </Link>
      <Route exact path='/Smurfs' component={App}/>
    </div>
  )
}
 
export default Header;