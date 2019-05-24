import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
        <ul className="navbar">
          <li>
            <NavLink
              exact
              to="/smurfs"
              className="nav-button"
              activeClassName="activeNavButton"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/smurf-form"
              className="nav-button"
              activeClassName="activeNavButton"
            >
              Add a Smurf!
            </NavLink>
          </li>
        </ul>
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurf={this.state.smurf}
              handleAddNewSmurf={this.handleAddNewSmurf}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
