import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

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
  componentDidMount() {
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
          console.log(response.data);
          this.setState({ smurfs: response.data })
        })
        .catch(error => {
            console.log(error)
        })
  };
    addSmurf = event => {
        event.preventDefault();
        // add code to create the smurf using the api
        const newSmurf = this.state;
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                console.log(response.data);
                this.setState({
                    smurfs: response.data
                })
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
          <div>
              <NavLink exact to='/smurfs'>Home</NavLink>
              <NavLink to='/smurf-form'>Add Smurf</NavLink>
          </div>

          <Route exact path='/smurfs' render={props => (
              <Smurfs {...props} smurfs={this.state.smurfs} />
          )} />

          <Route exact path='/smurf-form' render={props => (
              <SmurfForm {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf} handleChanges={this.handleInputChange} />
          )} />
      </div>
    );
  }
}

export default App;
