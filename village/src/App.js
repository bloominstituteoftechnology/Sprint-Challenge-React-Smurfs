import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, Route } from 'react-router-dom';


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
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>{
        this.setState({smurfs:res.data});
      })
      .catch(error =>{
        console.log(error);
      });
  }
  postSmurfToServer = smurf =>{
    axios
      .post('http://localhost:3333/smurfs',smurf)
      .then(response =>{
        this.setState({smurfs: response.data})
      })
      .catch(error =>{
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App">
        <div className = 'nav-bar'>
        <NavLink exact to="/">
            Smurf Village
          </NavLink>

          <NavLink exact to="/smurf-form">
            Add A New Smurf
          </NavLink>
        </div>
         <Route
          exact path="/"
          render={(props) =>
            <Smurfs 
              smurfs={this.state.smurfs}
            />}
        />
           <Route
          exact path="/smurf-form"
          render={(props) =>
            <SmurfForm addSmurfToServer = {this.postSmurfToServer}/>}
        />
        
        
      </div>
    );
  }
}

export default App;
