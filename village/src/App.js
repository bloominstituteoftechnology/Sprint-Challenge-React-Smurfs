import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

import {Route, Link, Switch} from 'react-router-dom';

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

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      })
  }

  render() {
    return (
      <div className="App">
        {/* {console.log('smurfs data', this.state.smurfs)} */}
        <Link to="/" >Home</Link>
        <Link to="/smurfs" >Smurf Village</Link>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/smurfs" render={(props) => <div> <SmurfForm {...props} /> <Smurfs {...props} smurfs={this.state.smurfs} /> </div>} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
