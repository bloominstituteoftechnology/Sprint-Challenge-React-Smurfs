import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import SmurfForm from './components/SmurfForm';
import UpdateSmurf from './components/UpdateSmurf';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Header from './components/Header';

import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response =>
      this.setState({ smurfs: response.data}))
    .catch(error => {
      console.error('Wops! Mistake!', error)
    })
  }

  refresh() {
    console.log(this.state);
    axios
    .get('http://localhost:3333/smurfs')
    .then(response =>
      this.setState({ smurfs: response.data}))
    .catch(error => {
      console.error('Wops! Mistake!', error)
    })
  }

  deleteSmurf(event, smurfId) {
    console.log(smurfId);
    axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response =>
      this.setState({smurfs: response.data}))
    .catch(error => {
      console.error('Wops! Mistake!', error)
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state
  // and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass
  // them down to props.
  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route path='/smurf-form' render={props =>
          <SmurfForm {...props} refreshSite={this.refresh} />
        }/>
        <Route exact path='/smurfs' render={props =>
          <Smurfs {...props} smurfs={this.state.smurfs}
            delete={this.deleteSmurf}
           />
        }/>
        <Route exact path='/smurf-update' render={props =>
          <UpdateSmurf {...props} smurfs={this.state.smurfs}
            delete={this.deleteSmurf}
           />
        }/>
      </div>
    );
  }
}

export default App;
