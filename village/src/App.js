import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const baseUrl = "http://localhost:3333";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/smurfs`)
      .then(res => 
        this.setState({
          smurfs: res.data
        }))
        
            .catch(err => 
              console.log(err));
            }
      

  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="header">Smurfs Village!!</h1>
        <div className="nav-links"> 
          <NavLink to="/">Smurfs List!</NavLink>
          <NavLink to="/smurf-form"> {this.state.isUpdating ? "Update" : "Add"}Smurf</NavLink>
        </div>
        </nav>
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={() => <SmurfForm baseUrl={baseUrl} smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;
