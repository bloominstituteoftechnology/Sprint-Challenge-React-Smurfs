import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


componentDidMount() {
  axios.get('http://localhost:3333/smurfs')
  .then(response => this.setState({smurfs: response.data}))
  .catch(error => console.log(error));
}

deleteSmurf = (event, id) => {
  event.preventDefault();
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(reponse => {
      this.setState({smurfs: reponse.data})
    })
    .catch(error => console.log(error))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Navigation />
      <Route
      path = "/smurf-form"
      render = {props => (
        <SmurfForm {...props}
        smurfs={this.state.smurfs}
        />
      )}
        />
        <Route
        exact
        path = "/"
        render = {props =>(
          <Smurfs {...props}
          smurfs={this.state.smurfs} 
          deleteSmurf={this.deleteSmurf}
          />
        )}
          />
      </div>
    );
  }
}

export default App;
