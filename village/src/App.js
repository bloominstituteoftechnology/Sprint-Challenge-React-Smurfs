import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' components={SmurfForm} />
          <Route path='/village/' components={Smurfs} />
        </Switch>
      </div>
    );
  }
}

export default App;
