import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';
import IndividualSmurf from './components/IndividualSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios     
    .get(`http://localhost:3333/smurfs`)
       .then(response => {
         console.log(response);
        this.setState({smurfs: response.data})
       })
       .catch(err => {
         console.log(err);
       });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <nav>
      <NavLink to="/smurflist" activeClassName="activeNavButton">
        SMURF LIST
      </NavLink>

      <NavLink to="/smurfform" activeClassName="activeNavButton">
        ADD A SMURF
      </NavLink>

      </nav>
      <Route 
  exact path="/" 
  render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
  <Route exact path="/smurflist"
   render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />


  <Route 
 path="/smurfform" 
  render={props => <SmurfForm {...props} /> }/>

  <Route path="/smurfs/:id"
  render={props=><IndividualSmurf {...props} smurfs={this.state.smurfs}/>}
  />
      </div>
    );
  }
}

export default App;
