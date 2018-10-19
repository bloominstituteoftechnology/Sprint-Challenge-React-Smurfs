import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
    axios.get('http://localhost:3333/smurfs')
          .then(res => { this.setState({ smurfs: res.data })
          })
          .catch(err => console.log(err))
  }

  smurfData = smurf => {
    this.setState({smurfs: smurf})
  }

  render() {
    return (
      <div className="App">
      <NavLink exact to="/">Smurf Form</NavLink>
      <NavLink exact to="/smurfs-village">Smurf Village</NavLink>
        <Route path= "/" render={props => (<SmurfForm {...props} smurfData={this.smurfData} /> )} />
        <Route path= "/smurfs-village" render={props => (<Smurfs {...props} smurfs={this.state.smurfs}/>)} />
      </div>
    );
  }
}

export default App;
