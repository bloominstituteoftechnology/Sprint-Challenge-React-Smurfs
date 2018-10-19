import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import './App.css';


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


  getSmurfs() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(smurfs => this.setState({ smurfs: smurfs.data }))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getSmurfs();
  }

  postSmurf(newSmurf) {

    console.log('Adding Smurf - ', newSmurf)

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(this.getSmurfs())
      .catch(error => console.log(error));

  }

  render() {
    // const smurfs = this.state.smurfs;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/SmurfForm' render={() => <SmurfForm postSmurf={this.postSmurf} />} />
          <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
        </div>
      </Router>
    );
  }
}

export default App;
