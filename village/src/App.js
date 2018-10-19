import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink } from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

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
     console.log("In CDM");
     axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs : response.data }))
      .catch(error => console.log(error));
  }

  updateSmurfs = (smurf) => {
      this.setState({ smurfs : smurf })
  }

  render() {
    return (
      <div className="App">
        
        <h1>Smurf Village</h1>
        <div className ="nav-links">
            <div>
                <NavLink exact to ="/" activeClassName = "somethingElse"> Smurf List</NavLink>
            </div>
            <div>
                <NavLink to = "/add-smurf"> Add Smurf </NavLink>
            </div>
        </div>
        
        {/* <SmurfForm 
              updateSmurfs = {this.updateSmurfs}
        /> */}
        <Route 
            exact path='/add-smurf' 
            render = { props => 
                <SmurfForm  {...props} updateSmurfs = {this.updateSmurfs} />
            }
        />

        {/* <Smurfs smurfs = {this.state.smurfs} /> */}          
        <Route 
            exact path='/' 
            render = { props => 
                <Smurfs {...props} smurfs = {this.state.smurfs} 
                                   deleteHandler = {this.deleteHandler}
                />
            }
        />

      </div>
    );
  }
}

export default App;

