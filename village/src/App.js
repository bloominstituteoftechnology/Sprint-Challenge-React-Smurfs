import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {NavLink, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){

    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("CDM Response", response);
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log("CDM Error", err);
    })
    
  }

  postSmurf = smurf => {
    
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      console.log('Post Response', response)

    })
    .catch(err => {
      console.log('Post Error', err);
    })

    
  }

  


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <ul className = "Nav">
         <li>
           <NavLink exact to = '/' activeClassName = "activeNavButton">Smurf's</NavLink>
          </li> 
          <li>
             <NavLink to = '/smurf-form' activeClassName = "activeNavButton">Add A Smurf</NavLink>
          </li>
         
        </ul>
        <div className = "Display">
          <Route exact path = '/'
           render = {() => <Smurfs smurfs = {this.state.smurfs} /> }
            />
          <Route exact path = '/smurf-form'
          render = {() => <SmurfForm postSmurf = {this.postSmurf} /> }
          />
        </div>
       
      </div>
    );
  }
}

export default App;
