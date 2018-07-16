import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to = {"/"}>
        <h2> Welcome to smurf village.</h2>
      </Link>
      
      <Link to = {"/smurfs"}>
        <button> ENTER VILLAGE</button>
      </Link>
    </div>
  )
}
 
export default Header;