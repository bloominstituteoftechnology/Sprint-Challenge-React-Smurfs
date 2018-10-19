import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
      .then(response => this.setState({smurfs: response.data}))
      .catch(error => console.log(error));
  }

  updateContent = (data) => {
    this.setState({smurfs: data})
  }

  updateFreind = (e) => {
    axios
      .put(`http://localhost:3333/smurfs/${e.target.id}`, {[e.target.name]: e.target.value})
      .then(response => this.updateContent(response.data)) 
      .catch(error => console.log(error));
  }

  deleteSmurf = (e) => {
    axios
    .delete(`http://localhost:3333/smurfs/${e.target.id}`)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <NavLink to='/' activeClassName="selected">
            <span>Smurfs</span>
        </NavLink>
        <NavLink to='/addSmurf' activeClassName="selected">
            <span>Add a new Friend</span>
        </NavLink>
        <Route exact path ='/addSmurf' render ={(props) => (
           <SmurfForm {...props} update={this.updateContent} />
        )}/>
        <Route exact path ='/' render ={(props) => (
           <Smurfs {...props} smurfs={this.state.smurfs} delete={this.deleteSmurf} update={this.updateFreind}/>
        )}/>
      </div>
    );
  }
}

export default App;
