import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route, NavLink, Redirect} from 'react-router-dom';
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
    axios.get('http://localhost:3333/smurfs')
         .then(smurfs => this.setState({smurfs: smurfs.data}))
         .catch(err => new Error(err));
  }

  postNewSmurf = (newSmurf) => {
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
         .then(smurfs => this.setState({smurfs: smurfs.data}))
         .catch(err => new Error(err));
  }

  deleteASmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(smurfs => this.setState({smurfs: smurfs.data}))
         .catch(err => new Error(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to SmurfVille</h1>
        <button onClick={() => this.props.history.goBack()} style={{position: 'absolute', top: '20px', left: '20px'}}>Back</button>
        <nav>
          <li><NavLink to="/">Smurfs</NavLink></li>
          <li><NavLink to="/smurf-form">Create New Smurf</NavLink></li>
        </nav>
        <Route exact path="/" render={(props) => <Smurfs deleteASmurf={this.deleteASmurf} {...props} smurfs={this.state.smurfs} />} />
        <Route exact path="/smurf-form" render={(props) => <SmurfForm {...props} postNewSmurf={this.postNewSmurf} />} />
      </div>
    );
  }
}

export default App;
