import React from 'react';
import {Route, Link} from 'react-router-dom';
import App from '../App';

const Header = () => {
  return (
  <div>
  <h2>Welcome to Smurfy Village!</h2>
  <Link to='/smurfs/'><button>Enter Village</button></Link>
  <Route path='/smurfs/' component={App} />
  </div>)
}
 
export default Header;