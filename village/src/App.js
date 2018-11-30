import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Router, Route, NavLink } from 'react-router-dom';

const serverURL = `http://localhost:3333/smurfs`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      updateForm: false,
      smurfToUpdate: {}
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get(serverURL)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  addSmurf = (smurf) => {
    axios
      .post(serverURL,smurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  stageUpdate = (smurf) => {
    this.setState({
      smurfToUpdate: smurf,
      updateForm: true
    });
  }
  stageSelection = (smurf) => {
    this.setState({
      smurfToUpdate: smurf
    })
  }

  deleteSmurf = (id) => {
    axios
      .delete(`${serverURL}/${id}`)
      .then(res => this.setState({smurfs: res.data, updateForm: false}))
      .catch(err => console.log(err))
  }

  updateSmurf = (smurf) => {
    axios
      .put(`${serverURL}/${this.state.smurfToUpdate.id}`, smurf)
      .then(res => this.setState({smurfs: res.data, updateForm: false}))
      .catch(err => console.log(err))
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to='/' onClick={()=>this.setState({updateForm: false})}>Smurf Home</NavLink>
          <NavLink to='/smurf-form'onClick={()=>this.setState({updateForm: false})}>Smurf Form</NavLink>
        </nav>

        <Route exact path='/'
          render={(props) => <Smurfs {...props} 
          smurfs={this.state.smurfs} 
          stageUpdate={this.stageUpdate}
          stageSelection={this.stageSelection}
          /> } />

        <Route path='/smurf-form'
          render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} 
          updateForm={this.state.updateForm}
          smurfToUpdate={this.state.smurfToUpdate}
          deleteSmurf={this.deleteSmurf}
          updateSmurf={this.updateSmurf}
          /> } />

        {/* <Route path='/smurf/:id'
          render={(props) =>
          <Smurfs {...props} smurfs={[this.state.smurfs.find(smurf => {
            return smurf.id === this.props.match.params.id;
          })]}
          />} /> */}

        <Route exact path='/smurf/:id'
          render={(props) => <Smurfs {...props} 
          smurfs={[this.state.smurfToUpdate]} 
          stageUpdate={this.stageUpdate}
          stageSelection={this.stageSelection}
          /> } />

      </div>
    );
  }
}

export default App;
