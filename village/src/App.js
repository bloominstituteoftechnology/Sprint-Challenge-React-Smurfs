import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      individual: {
        name: '',
        age: '',
        height: ''
      }, // smurf object
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
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <div className='nav'>
        <NavLink exact to='/'>Village</NavLink>
        <NavLink to='/smurf-form'> Add-A-Smurf</NavLink>
      </div>
      <Route 
        exact path='/'
        render={props => (
          <Smurfs smurfs={this.state.smurfs} />
        )}
      />      
      <Route 
        path='/smurf-form' 
        render={props => (          
          <SmurfForm />
        )}
      />            
      </div>
    );
  }
}

export default App;

/*
Disregard the last two bullet points, and follow these instructions here:
• Create two `routes` in your `App` component, one at `'/'` for your `Smurfs` component, and one at `/smurf-form` for your form.
• Then in your `App` component, create a nav bar that will use `NavLink` to route to your different pages.
• (Disregard, or even delete, the rogue `Header` component that Gargamel somehow snuck into our project. Curse you Gargamel!!!)
*/
