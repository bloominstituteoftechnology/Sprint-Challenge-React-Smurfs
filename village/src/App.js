import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Nav from './components/Navigation';
import Smurf from './components/Smurf';

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
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        this.setState({ smurfs: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewSmurf = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then((response) => this.setState({ smurfs: response.data }));
  };

  deleteSmurf = (smurfId) => {
    return axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then((response) => this.setState({ smurfs: response.data }));
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Header} />
        <Route
          exact
          path="/smurfs"
          render={(props) => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />

        <Route
          path="/addsmurf"
          render={(props) => <SmurfForm addNewSmurf={this.addNewSmurf} />}
        />

        <Route
          path="/smurfs/:smurfId"
          render={(props) => <Smurf {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
