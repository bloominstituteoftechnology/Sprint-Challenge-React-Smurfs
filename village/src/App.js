import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({
        smurfs: res.data
      }))
  }

  addSmurf = (data) => {
    axios.post('http://localhost:3333/smurfs', data)
      .then(res => this.setState({
        smurfs: res.data
      }))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const { smurfs } = this.state
    return (
      <div className="App">
        <div className='nav-wrapper'>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/smurf:id'>Smurf</NavLink>
            <NavLink to='/smurf-form'>Add New Smurf</NavLink>
          </nav>
        </div>
        
        <Route 
          exact path='/'
          render={props => 
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs} /> }
        />
        
        <Route 
          exact path='/smurf:id'
          render={props =>
            <Smurf 
              {...props}
              smurfs={smurfs}
            />
          }
        />
        
        <Route 
          exact path='/smurf-form'
          render={props =>
            <SmurfForm 
              {...props}
              addSmurf={this.addSmurf}
            />
          }
        />
        
      </div>
    );
  }
}

export default App;
