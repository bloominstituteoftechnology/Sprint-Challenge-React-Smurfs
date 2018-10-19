import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import EditSmurf from './components/EditSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => alert(err));
  }
  addMain = data => {
    axios
      .post('http://localhost:3333/smurfs', data)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => alert(err));
  };
  handleEdit = (id, data) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, data)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => alert(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <SmurfForm {...props} addMain={this.addMain} />}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditSmurf
              {...props}
              smurfs={this.state.smurfs}
              handleEdit={this.handleEdit}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
