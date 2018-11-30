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
      .catch(err => console.log(err))
  }
  
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }

  editSmurf = (data, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, data)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }
  render() {
    const { smurfs } = this.state
    return (
      <div className="App">
        <div className='nav-wrapper'>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/add-smurf'>Add New Smurf</NavLink>
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
          exact path='/add-smurf'
          render={props =>
            <SmurfForm 
              {...props}
              addSmurf={this.addSmurf}
            />
          }
        />

        <Route
          exact path='/edit-smurf/:id'
          render={props =>
            <SmurfForm
              {...props}
              editSmurf={this.editSmurf}
              edit
            />
          }
        />
        
      </div>
    );
  }
}

export default App;
