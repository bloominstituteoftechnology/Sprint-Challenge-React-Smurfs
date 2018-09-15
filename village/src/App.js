import React, { Component } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
// import Links from './components/Links';
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
        .get('http://localhost:3333/smurfs')
        .then(response => {
          this.setState(() => ({smurfs: response.data}));
        })
        .catch(error => {
          console.log('Server Error', error);
        })
  }

  addSmurf = (smurf) => {
   

    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => this.setState({smurfs:response.data}))
    .catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      
      <div className="App">
      {/* <NavLink className="nav" to='/smurf-form'>Smurf Form</NavLink>
      <NavLink className="nav" to='/'>Smurfs</NavLink> */}
      {/* <Links /> */}
      <nav>
        <div><NavLink className="active"exact to = '/'>Village</NavLink></div>
        <div><NavLink to = '/smurf-form'>Add New Smurf</NavLink></div>
      </nav>

      <Route 
        exact
        path='/' 
        render={props => <Smurfs {...props} smurfs={this.state.smurfs}/> }
        />

      <Route 
        path='/smurf-form' 
        render={props => <SmurfForm {...props} addSmurf={this.addSmurf} /> }
        />
    
    
       
      </div>
    
    );
  }
}

export default App;
