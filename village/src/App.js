import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.




  render() {
    return (
      <div className="App">
        <div className="navlink">
          <NavLink exact to="/" activeClassName="activeNavButton">Smurfs</NavLink>
          <NavLink exact to="smurf-form" activeClassName="activeNavButton">Add a Smurf</NavLink>
        </div>
        <Route path='/smurf-form' component={SmurfForm} />
        <Route exact path='/' render={props => (<Smurfs {...props} />)} />  
        {/* <SmurfForm /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
