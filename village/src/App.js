import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

const url = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

//Pulling in data from server

componentDidMount() {
  axios
  .get(url)
  .then((response) => this.setState({smurfs: response.data }))
  .catch(error => console.error(error))
}

handleSubmit = data => this.setState({smurfs: data});

  render() {
    return (
      <div className="App">

      
    <Route exact path = "/" component = {Header}/>



      <Route path = '/smurfs'
        render = {props =>
            <Smurfs {...props} 
            smurfs={this.state.smurfs} 
            />
          }
        />


              <Route path='/smurfs' 
        render = {props =>
            <SmurfForm {...props} 
            handleSubmit = {this.handleSubmit} 
            />
          }
        />

     <span className = "navbar">
     <button> 
       <NavLink exact to = "/" activeClassName = "activeNavBUtton"> 
          Home
        </NavLink>
      </button>
      <button>
        <NavLink exact to = "/smurfs" activeClassName = "activeNavBUtton"> 
          Enter the Village
        </NavLink>
      </button>
      </span>


      </div>
    );
  }
}

export default App;
