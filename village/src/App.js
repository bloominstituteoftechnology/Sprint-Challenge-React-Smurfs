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
  
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({
        smurfs: res.data
      }))
  }
  render() {
    const { smurfs } = this.state
    return (
      <div className="App">
        <div className='nav-wrapper'>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
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
          exact path='/smurf/:id'
          render={props =>
            <Smurf 
              {...props}
              smurfs={ smurfs }
              delete={this.deleteSmurf}
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
