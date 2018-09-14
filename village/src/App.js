import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

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

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/new-smurf">
          Add Smurf
        </NavLink>
         <Route exact path="/" render={props => (
          <Header />
        )} />
         <Route path="/smurfs" render={props => (
          <Smurfs smurfs={this.state.smurfs} />
        )} />
         <Route path="/new-smurf" render={props => (
          <SmurfForm newSmurf={this.postNewSmurf}/>
        )} />
      </div>
    );
  }
}

export default App;
