import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState ({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <header>
          <h2>Welcome to the Smurf Village</h2>
          <NavLink  className="enter" to="/smurfs">
            Enter Village
          </NavLink >    
          <NavLink  className="join" to="/smurfform">
            Join Village
          </NavLink >  
        </header>

        <Route exact path='/smurfs' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route exact path='/smurfform' component={SmurfForm} />
      </div>
    );
  }
}

export default App;
