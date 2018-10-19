import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      url: 'http://localhost:3333',
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    const { url, smurfs } = this.state;
    if (!smurfs.length) {
      axios
        .get(`${url}/smurfs`)
        .then(res => this.updateSmurfs(res.data))
        .catch(err => console.log(err));
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // UPDATE SMURF LIST
  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  // ADD NEW SMURF TO LIST
  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, {
        name,
        age,
        height
      })
      .then(res => this.updateSmurfs(res.data))
      .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  // DELETE SMURF
  deleteSmurf = id => {
    const { url } = this.state;
    axios
      .delete(`${url}/smurfs/${id}`)
      .then(res => this.updateSmurfs(res.data))
      .catch(err => console.log(err));
  };

  // UPDATE SINGLE SMURF
  updateSmurf = e => {};

  render() {
    const { name, age, height } = this.state;
    return (
      <div className="App">
        <nav className="nav">
          <NavLink exact to="/">
            Smurfs
          </NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              name={name}
              age={age}
              height={height}
              addSmurf={this.addSmurf}
              handleInputChange={this.handleInputChange}
              updateSmurfs={this.updateSmurfs}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
