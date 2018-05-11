import React from 'react';
import { Link, Route } from 'react-router-dom';
import App from '../App'
import logo from './logo.bmp'

const Header = () => {
  return (
    <div className="enter-header text-center">
      <h2>Welcome to Smurf Village</h2>
      <Route exact path="/" render={() => {
        return (
          <Link to="/smurfs"><button>Enter</button></Link>
        );
      }} />
      <Route path="/smurfs" component={App} />
    </div>
  );
}
 
export default Header;