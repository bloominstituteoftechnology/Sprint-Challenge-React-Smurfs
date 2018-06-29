import React from 'react';
import {Route, Link} from 'react-router-dom';
import App from '../App.js';

class Header extends React.Component {
    constructor() {
      super();
      this.state = {

      }
    }
    render(){
    return(
        <div>
        <Route path='/smurfs' component={App}/>
        <Link to='/smurfs'>
        <h4> Welcome to Smurf Village </h4>
        </Link>
        </div>
    );
    }
}

export default Header;