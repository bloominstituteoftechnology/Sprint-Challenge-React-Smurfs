import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink
            exact
            to="/"
            className="nav-button"
            activeClassName="active-nav-button"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/smurfs"
            className="nav-button"
            activeClassName="active-nav-button"
          >
            Smurf Village
          </NavLink>
          <NavLink
            exact
            to="/smurf-form"
            className="nav-button"
            activeClassName="active-nav-button"
          >
            Add a Smurf!
          </NavLink>
        </div>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          exact
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
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
