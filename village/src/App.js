import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    this.getSmurfs();
  }

  addSmurfsOnCreate = smurfs => {
    this.setState({ smurfs });
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(error => {
        console.log(`There was an error getting smurfs: ${error}`);
      });
  };

  deleteSmurf = id => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.getSmurfs();
    })
    .catch(err => {
      console.log(err);
    });
  };


  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        {/* <Switch> */}
          <SmurfForm addSmurfsOnCreate={this.addSmurfsOnCreate} />
          <Smurfs deleteSmurfs={this.deleteSmurf} smurfs={smurfs} />
          {/* <Route exact path='/' components={SmurfForm} />
          <Route path='/village/' components={Smurfs} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
