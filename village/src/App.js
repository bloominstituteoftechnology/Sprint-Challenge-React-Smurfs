import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    console.log('CDM now running');
    axios
      .get (`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        this.setState({ 
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  postSmurf = smurf => {
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(response => {
        this.setState({
          smurf: response.data
        })
      })
        .catch (error =>
    console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <div className="navlink">
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form"> SmurfForm</NavLink>
        </div>
        <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} postSmurf={this.postSmurf} />} />
      </div>
    );
  }
}

export default App;
