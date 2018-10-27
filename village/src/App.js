import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import {Route, NavLink} from 'react-router-dom'
import Smurf from './components/Smurf';

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
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
          this.setState(() => ({ smurfs: response.data }));
        })
        .catch(error => {
          console.error('Ya gone did smurfed!', error);
        });
  }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
        <li>
          <NavLink to="/smurfs" activeClassName="activeNavButton">
            The Village
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurf-form" activeClassName="activeNavButton">
            Add New
          </NavLink>
        </li>
      </ul>
        <Route 
          path="/smurf-form" 
          render={props => (
            <SmurfForm
              {...props} 
            />
          )}
        />
        <Route 
          exact path= "/" 
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          )} 
        />
        <Route
          exact path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          )}
        />
      <Route 
        path="/smurfs/:id"
        render={props => (
          <Smurf
            {...props}
            smurfs={this.state.smurfs}
          />
        )}
      />
      </div>
    );
  }
}

export default App;
