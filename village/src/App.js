import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard';

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
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleDeleteSmurf = smurfId => {
    return axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => this.setState({ smurfs: response.data }));
  }

  render() {
    return (
      <div className="App">
      <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="activeNavButton">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink to="/smurf-form" activeClassName="activeNavButton">
        Add Smurf
        </NavLink>
        </li>
        </ul>
      <Route exact path="/" render={props =>
      <Smurfs {...props} smurfs={this.state.smurfs} />}
      />
      <Route path="/smurf-form" render={props =>
        <SmurfForm {...props} />
        }
      />
      <Route exact path="/smurfs/:smurfId" render={props =>
        <SmurfCard
          {...props}
          smurfs={this.state.smurfs}
          handleDeleteSmurf={this.handleDeleteSmurf} />}
          />
      </div>
    );
  }
}

export default App;
