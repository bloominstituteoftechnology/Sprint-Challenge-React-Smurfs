import React from 'react';
import App from '../App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
    
    <h2>Hello! Welcome to the Smurf Village!</h2>
    <Link to="/smurfs">Village</Link>
    <Route exact path="/smurfs" component={App} />
    
    </div>
  )
}
 
export default Header;