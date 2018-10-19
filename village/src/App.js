import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const blankSmurf = {
  name: '',
  age: '',
  height: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurfShape: blankSmurf,
      deleteId: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => console.log(error));
  }

  updateState = smurfs => {
    this.setState({ smurfs })
  }
  
  render() {
    return (
      <div className="App">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/smurf-form" className="link">Add Smurf</NavLink>

        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} updateState={this.updateState} />} /> 
        
        
      </div>
    );
  }
}

export default App;
