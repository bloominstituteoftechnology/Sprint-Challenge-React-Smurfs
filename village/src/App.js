import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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

  addSmurf = obj => {
    const { smurfs } = this.state;
    smurfs.push(obj);
    this.saveSmurf(obj);
    this.setState({ smurfs });
  };

  saveSmurf = obj => {
    axios
      .post('http://localhost:3333/smurfs', obj)
      .then(() => {
        this.getSmurfs();
      })
      .catch(err => {
        console.err(err);
      });
  };

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
            render={(props) => <Smurfs {...props} saveSmurf={this.saveSmurf} deleteSmurf={this.deleteSmurf} />
            } />
          <Route path="/addSmurf"
            render={(props) => <SmurfForm addSmurf={this.addSmurf} updateInput={this.updateInput} />
            } />
        </Switch>
      </div>
    );
  }
}

export default App;
