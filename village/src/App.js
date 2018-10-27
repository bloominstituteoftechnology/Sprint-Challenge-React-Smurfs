import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'; /*Importing AXIOS to make AJAX requests*/
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'; /*Importing BorwserRouter and calling it Router to make it easier to type, as well as importing Route */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){ /*When the component loads*/
    axios.get('http://localhost:3333/smurfs').then(response => { /*Making a get request to the server to get the smurfs array*/
      this.setState({ 
        smurfs: response.data /*Setting the data retrieved from the sever to the smurfs array on the state*/
      })
    }).catch(err => {console.log(err)}); /*If there is an error, log what the error was*/
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      /*Setting up React Router*/
      <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink> <br /> {/*Navigation button using NavLink component to go to Home Page*/}
          <NavLink to="/smurf-form">Add New Smurf</NavLink> {/*Navigation button using NavLink component to go to Home Page*/}
        </nav>
        <Route path='/smurf-form' component={SmurfForm} /> {/*When the user goes to the route /smurf-form, the SmurfForm component is loaded*/}
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} /> {/*Whe nthe user goes exactly to the / route, the client renders the smurf component with the array on the state passed as a prop*/}
      </div>
      </Router>
    );
  }
}

export default App;
