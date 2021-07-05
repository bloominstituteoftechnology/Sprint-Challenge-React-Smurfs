// React and axios imports
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
// Component imports
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editing: false,
      editingId: null
    };
  }
  // Sends get request to server to grab the data for the state
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  addNewSmurf = smurf => {
    if (smurf.name && smurf.age && smurf.height) {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => this.setState({ smurfs: response.data }))
        .catch(error => console.log('Error', error));
    } else {
      alert('Missing Information');
    }
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log('Error', error));
  };

  updateEditing = id => {
    this.setState({ editing: true, editingId: id });
  };

  homeSwitch = () => {
    this.setState({ editing: false, editingId: null });
  };

  updateSmurf = info => {
    axios
      .put(`http://localhost:3333/smurfs/${this.state.editingId}`, info)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log('Error', error));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation editing={this.state.editing} homeSwitch={this.homeSwitch} />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addNewSmurf={this.addNewSmurf}
              editing={this.state.editing}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateEditing={this.updateEditing}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
