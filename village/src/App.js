import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, NavLink} from 'react-router-dom'

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
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  addSmurf = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        {/* <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} /> */}
        <nav>
          <h2><NavLink to="/">to Village</NavLink></h2>
          <h2><NavLink to="/smurf-form">Add Smurf</NavLink></h2>
        </nav>

        <Route exact path ="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route exact path = "/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>}/>
      </div>
    );
  }
}

export default App;
