import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/'
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

  componentDidMount = () => {
    axios
      .get(`${url}smurfs`)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  addNewSmurf = data => {
    axios
      .post(`${url}smurfs`, data)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/smurf-form'> Add New Smurf</NavLink>
        </nav>

        <Route exact path='/smurf-form' render={props => <SmurfForm {...props} add={this.add}/>}/>
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;
