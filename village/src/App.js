import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

const serverRoot = 'http://localhost:3333';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get(serverRoot + '/smurfs')
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list'));
  }

  addSmurf = (smurfObj) => {
     axios
      .post(serverRoot + '/smurfs', smurfObj)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list'));
  }

  modifySmurf = (smurfObj) => {
    axios 
      .put(serverRoot + '/smurfs/' + smurfObj.id, smurfObj)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list'));
  }

  deleteSmurf = (smurfObj) => {
    axios 
      .delete(serverRoot + '/smurfs/' + smurfObj.id)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list')); 
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink to='/'>Home</NavLink>
          <NavLink exact to='/smurf-form'>Add Smurf</NavLink>
        </div>

        <Route 
          exact 
          path='/' 
          render={props =>
             <Smurfs 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf} 
              {...props}/>
          }
        />
        <Route 
          path='/smurf-form' 
          render={props => 
            <SmurfForm 
              addSmurf={this.addSmurf} 
              {...props}/>
          }
        />

        <Route 
          path='/smurf/:id'
          render={props => {
              const smurfObj = this.state.smurfs.find(s => String(s.id) === String(props.match.params.id));
              return (
                <div className="modify-smurf">

                  <Smurf
                    {...smurfObj}
                    {...props}
                    modifySmurf={this.modifySmurf}
                    deleteSmurf={this.deleteSmurf}
                  />
                  <SmurfForm
                    id={props.match.params.id}
                    addSmurf={this.modifySmurf}
                    {...props}
                  />
                </div>
              )
            }
          }
        />
        
      </div>
    );
  }
}

export default App;
