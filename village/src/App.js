import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

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
    this.getSmurfs('http://localhost:3333');
  }

  getSmurfs = url => {
    axios.get(`${url}/smurfs`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { smurfs } = this.state;

    return (
      <div className="App">
        <nav>
            <h1>
              <NavLink exact to="/">
                Smurfs
              </NavLink>
            </h1>
            <h1>
              <NavLink to="/smurf-form">
                Add New Smurf
              </NavLink>
            </h1>
        </nav>
        <Route
          path="/smurf-form"
          render={ownProps => <SmurfForm {...ownProps} smurfs={smurfs} />}
        />
        <Route
          exact
          path="/"
          render={ownProps => (
            <Smurfs
              {...ownProps}
              smurfs={smurfs}
            />
          )}
        />

      </div>
    );
  }
}

export default App;