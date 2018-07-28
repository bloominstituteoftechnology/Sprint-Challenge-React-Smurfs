import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import App from '../App';


const Header = () => {
  return (
    <div className="header">
    <h2>Hello! Welcome to the Smurf Village!</h2>
    <Link className="link" to="/smurfs">Village</Link>
    <Route path="/smurfs" component={App} />   
    </div>
  );
}
 
export default Header;