import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';


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
    axios.get(`http://localhost:3333/smurfs/`)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  render() {
    return (
      <div className="App">
      <div className='navBar'>
        <NavLink to="/">
          Smurfs
        </NavLink>
        
        <NavLink to="/smurf-form">
          Add Smurf
        </NavLink>
      </div>
      
      <Route
          exact
          path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} smurfs={this.state.smurfs}/>
          )}
        />
      </div>
    );
  }
}

export default App;
