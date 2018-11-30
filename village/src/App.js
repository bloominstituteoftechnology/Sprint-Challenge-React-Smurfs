import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then( res => this.setState({
        smurfs: res.data,
      }))
      .catch( err => console.log(`Error: ${err}`) )
  }

  addSmurf = smurf => {
    axios
      .post(URL, smurf)
      .then ( res => this.setState({
        smurfs: res.data,
      }))
      .catch( err => console.log(`Error: ${err}`) )
  }

  removeSmurf = id => {
    axios
      .delete(`${URL}/${id}`)
      .then( res => this.setState({
        smurfs: res.data,
      }))
  }

  updateSmurf = (smurf, id) => {
    axios
    .put(`${URL}/${id}`, smurf)
    .then( res => this.setState({
      smurfs: res.data,
    }))
    .catch( err => console.log(`Error: ${err}`))
  }

  render() {
    return (
      <div className="App">

        {/* add navigation */}
        <NavLink to='/' >Smurf Village</NavLink>
        <NavLink to='/smurf-form' >Add Smurf</NavLink>

        {/* add routes */}
        <Route exact path='/' render={ props => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs}
            removeSmurf={this.removeSmurf}
          /> )}
        />
        <Route path='/smurf-form' render={ props => (
          <SmurfForm
            {...props}
            handleSubmit={this.addSmurf}
          /> )}
        />
        <Route path='/smurf-update/:id' render={ props => (
          <SmurfForm
            update
            {...props}
            smurfs={this.state.smurfs}
            handleSubmit={this.updateSmurf}
          /> )} 
        />
      </div>
    );
  }
}

export default App;
