import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Home from './components/Home';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: "",
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {console.log("Error", err)});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="navBar">
          <div className="navButton">
            <NavLink exact to="/" activaClassName="activeNavButton">Smurfs Home Page</NavLink>
          </div>
          <div className="navButton">
            <NavLink exact to="/smurfs" activaClassName="activeNavButton">Smurf</NavLink>
          </div>
          <div className="navButton">
            <NavLink to="/addsmurfs" activaClassName="activeNavButton">Add Smurfs</NavLink>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/smurfs" render={props => (<Smurfs {...props} smurfsList={this.state.smurfs} /> )} />
        <Route path="/smurfs/:smurfsId" render={props => (<Smurf {...props} smurfsList={this.state.smurfs} /> )} />
        <Route path="/addsmurfs" render={props => (<SmurfForm {...props} addSmurf={this.addSmurf} handleInputChange={this.handleInputChange} smurf={this.state.smurf} /> )} />
        
      </div>
    );
  }
}

export default App;
