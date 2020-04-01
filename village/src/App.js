import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
    componentDidMount() {
      axios
        .get('http://localhost:3333/smurfs')
        .then(response => this.setState({smurfs: response.data}))
        .catch(error => console.log(error))
    }

  render() {
    const {smurfs} = this.state
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>
            Smurfs
          </NavLink>

          <NavLink to='/smurf-form'>
            Add New Smurf
          </NavLink>
        </nav>

        <Route exact path='/' render={props => <Smurfs {...props} smurfs={smurfs} />} />
        <Route path='/smurf-form' render={props => <SmurfForm {...props} smurfs={smurfs} />} />

      </div>
    );
  }
}

export default App;
