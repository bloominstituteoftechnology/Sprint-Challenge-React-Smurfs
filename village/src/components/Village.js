import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

const URL = "http://localhost:3333/smurfs";

class Village extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: 0,
      height: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => console.log(err)) 
  }

  handleUpdateField = event => {
    this.setState ({[event.target.name]: event.target.value});
  }

  updateSmurf = id => {
    const smurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }
    axios
      .put(`${URL}/${id}`, smurf)
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios
      .delete(`${URL}/${id}`)
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Link to="/" >Leave the Village</Link>
        <SmurfForm URL={URL} />
        <Smurfs smurfs={this.state.smurfs} handleDelete={this.deleteSmurf} formChange={this.handleUpdateField} formSubmit={this.updateSmurf} />
      </div>
    );
  }
}

export default Village;
