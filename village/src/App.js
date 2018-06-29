import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfEdit from './components/SmurfEdit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateSmurf

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(() => {
        this.getSmurfs();
      })
      .catch(err => {
        console.err(err);
      });
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={(props) => <Smurfs {...props} saveSmurf={this.saveSmurf} />
            } />
            <Route path="/smurf/:id"
              render={(props) => <SmurfEdit {...props} updateSmurf={this.updateSmurf} deleteSmurf={this.deleteSmurf} />
              } /> 
          <Route path="/addSmurf"
            render={(props) => <SmurfForm />
            } />         
        </Switch>
      </div>
    );
  }
}

export default App;