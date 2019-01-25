import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get(' http://localhost:3333/smurfs')
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => console.log(err))
  }

  updateState = (data) => {
    this.setState({
      smurfs: data,
    })
  }

  destroySmurf = (e, id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => console.log(err))

  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/smurf-form'}>Form</NavLink>
        </nav>
        <Route path='/smurf-form' render={ props => <SmurfForm {...props} updateState={this.updateState} />} />
        <Route exact path='/' render={ props => <Smurfs {...props}
          destroySmurf={this.destroySmurf}
          smurfs={this.state.smurfs} />} />
        {/* <Route path='/smurfs' render={} /> */}
        
        
      </div>
    );
  }
}

export default App;
