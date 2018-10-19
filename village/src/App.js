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

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { smurfs } = this.state;

    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                Smurfs
              </NavLink>
            </li>
            <li>
              <NavLink to="/smurf-form" activeStyle={{ fontWeight: "bold" }}>
                Add New Smurf
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route
          exact
          path="/"
          render={ownProps => (
            <Smurfs
              {...ownProps}
              smurfs={smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={ownProps => <SmurfForm {...ownProps} smurfs={smurfs} />}
        />
      </div>
    );
  }
}

export default App;
