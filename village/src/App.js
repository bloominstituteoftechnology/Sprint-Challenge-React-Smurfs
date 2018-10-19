import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
   this.serverURL = "http://localhost:3333/smurfs";
   this.updateSmurfs = this.updateSmurfs.bind(this);
   this.deleteSmurf = this.deleteSmurf.bind(this);
  }

  componentDidMount(){
    axios.get(this.serverURL)
    .then(response => this.setState({ smurfs: response.data }))
    .catch(error => console.log(error));
   
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateSmurfs(updatedSmurfs){
     this.setState({ smurfs: updatedSmurfs });
  }

  deleteSmurf(event, id){
    event.preventDefault();

    axios.delete(`${this.serverURL}/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/smurf-form" >Add smurf</NavLink>
        </nav>

        <Route exact path="/" render={(props) =>( <Smurfs {...props} smurfs={this.state.smurfs} 
                          deleteSmurf = {this.deleteSmurf}/>)}/>
        <Route path="/smurf-form" render={(props) =>(<SmurfForm {...props} updateSmurfs={this.updateSmurfs}/> )}/>
  
      </div>
    );
  }
}

export default App;
