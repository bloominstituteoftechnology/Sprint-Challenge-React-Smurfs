import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurfs-form">Create Smurf</NavLink>
        </div>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route path="/smurfs-form" component={SmurfForm}/>
      </div>
    );
  }
}

export default App;
