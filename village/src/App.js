import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import SmurfUpdateForm from './components/SmurfUpdateForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard';
import Header from './components/Header';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';

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
    .then(response => {
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
  }

  newSmurf = (data) => {
    axios.post('http://localhost:3333/smurfs', data)
    .then(response => {
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => this.setState({ smurfs: response.data }))
  }

  updateSmurf = (id, data) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, data)
    .then(response => {
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Link to="/">
          Home
        </Link>

        <Route exact path="/" render={props => (
          <Header {...props} />
        )} />

        <Route path="/smurfs" render={props => (
          <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          
        )} />

        <Route exact path="/smurfs" render={props => (
          <SmurfForm {...props} newSmurf={this.newSmurf} />
        )} />

        <Route exact path="/smurfs/:id" render={props => (
          <SmurfUpdateForm {...props} smurfs={this.state.smurfs} updateSmurf={this.updateSmurf} />
        )} />

        <Route path="/smurf/:id" render={props => (
          <SmurfCard {...props} 
            smurfs={this.state.smurfs}
          />
        )} />
        
      </div>
    );
  }
}

export default App;
