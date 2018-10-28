import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name:'',
      age:'',
      height:''
    };
  }
  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs:response.data
        })
      })
      .catch(error => console.log(error))
  }

  addSmurfz = smurfz => {
    axios
    .post("http://localhost:3333/smurfs",smurfz)
    .then(response => {
      this.setState({
        smurfs:response.data,
        name: '',
        age: '',
        height: ''
      });
    })
    .catch(error => console.log(error))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
            <NavLink exact to="/">Meet the Smurfs</NavLink>
            <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route 
        exact
        path="/"
        render={(props) => <Smurfs {...props}smurfs={this.state.smurfs} /> } />
        <Route 
        path="/smurf-form" 
        render={(props) => <SmurfForm {...props} addSmurfz={this.addSmurfz}/>} />
      </div>
    );
  }
}

export default App;
