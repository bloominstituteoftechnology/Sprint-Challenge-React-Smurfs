import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
// import Smurf from './components/Smurf';

// Importing Font Awesome icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
library.add(faGhost)


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

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

    // STRETCH: delete smurfs
    // handleDelete = smurf => {
    //   return axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    //     .then(response => this.setState({ smurfs: response.data }));
    // }
  
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
              <Smurfs {...props} 
              smurfs={this.state.smurfs}
              handleDelete={this.handleDelete} 
              />
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