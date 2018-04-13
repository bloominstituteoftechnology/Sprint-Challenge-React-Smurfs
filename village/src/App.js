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

  addInput = obj => {
    const { smurfs } = this.state;
    smurfs.push(obj);
    this.saveInput(obj);
    this.setState({ smurfs });
  };

  saveInput = obj => {
    axios
      .post('http://localhost:3333/smurfs', obj)
      .then(() => {
        this.getFriends();
      })
      .catch(err => {
        console.err(err);
      });
  };

  deleteInput = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(() => {
        this.getFriends();
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
            render={(props) => <Smurfs {...props} saveInput={this.saveInput} deleteInput={this.deleteInput} friends={this.state.friends} newFriend={this.state.newFriend} onClick={this.addInput} />
            } />
          <Route path="/addSmurf"
            render={(props) => <SmurfForm addInput={this.addInput} id={this.state.id + 1} updateInput={this.updateInput} />
            } />
        </Switch>
      </div>
    );
  }
}

export default App;
