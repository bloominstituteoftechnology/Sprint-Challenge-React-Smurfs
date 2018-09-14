import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link, NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const blankFormValues = {
  name: "",
  age: 0,
  height: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: "",
        age: 0,
        height: ""
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value,
      }
    });
  }

  handleAgeChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        age: Number(event.target.value),
      }
    });
  }

  handleAddSmurf = event => {
    event.preventDefault();
    console.log("Adding new smurf.");

    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(response => this.setState({ smurfs: response.data, newSmurf: blankFormValues }))
  }

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink exact to="/">
            Smurf Village
          </NavLink>
          
          <NavLink exact to="/smurf-form">
            Add A New Smurf
          </NavLink>
        </div>

        <Route 
        exact path="/" 
        component={() => 
          <Smurfs 
            smurfs={this.state.smurfs}
            newSmurf={this.state.newSmurf}
          />}
        />
        {/* <Smurfs
          smurfs={this.state.smurfs}
          newSmurf={this.state.newSmurf}
        /> */}
        <Route
          path="/smurf-form"
          component={() => 
            <SmurfForm 
              smurfs={this.state.smurfs}
              newSmurf={this.state.newSmurf}
              handleChange={this.handleChange}
              handleAgeChange={this.handleAgeChange}
              addNewSmurf={this.handleAddSmurf}
          />}
        />
        {/* <SmurfForm
          smurfs={this.state.smurfs}
          newSmurf={this.state.newSmurf}
          handleChange={this.handleChange}
          handleAgeChange={this.handleAgeChange}
          addNewSmurf={this.handleAddSmurf}
        /> */}
      </div>
    );
  }
}

export default App;