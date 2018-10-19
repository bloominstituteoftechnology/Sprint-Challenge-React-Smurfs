import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
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
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        // console.log(response.data);
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Smurfs
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/smurfs-form" activeClassName="activeNavButton">
              Add Smurf
            </NavLink></li>
        </ul>

       <Route
          exact
          path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )}
        />
      <Route
          path="/smurfs-form"
          render={props => (
            <SmurfForm 
          {...props}  
          name={this.state.name} 
          age={this.state.age} 
          height={this.state.height} 
          addSmurf={this.addSmurf}
          handleInputChange={this.handleInputChange}
        />  
        )}
        />
    
      </div>
    );
  }
}

export default App;
