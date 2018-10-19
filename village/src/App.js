import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {NavLink, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          this.setState({ smurfs : [...res.data] });
      })
      .catch(err => console.log(err));
  }

  handleChange = () => {
    axios 
      .post('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

        <NavLink exact to ="/"
          className="link list-link"
          activeClassName="activeNavButton">Smurf List
          </NavLink>
        <NavLink  to="smurf-form"
          className="link form-link"
          activeClassName="activeNavButton">Add Smurf
        </NavLink>

        <Route path="/smurf-form"
          render = {props =>
            <SmurfForm 
              {...props}
              componentDidMount={this.componentDidMount}
              handleChange={this.handleChange}
              /> } 
        />

        <Route exact path="/"
          render={props =>
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs}
              handleChange={this.handleChange} /> } 
          />
      </div>
    );
  }
}

export default App;
