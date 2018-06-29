import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    const context = this;
    axios
      .get(this.url)
      .then((response) => {
        context.setState({
          smurfs: response.data,
        });
      })
      .catch((response) => {
        console.log('Failed ', response.data);
      });
  }

  addSmurf = (smurf) => {
    const context = this;
    axios
      .post(this.url, smurf)
      .then((response) => {
        context.setState({
          smurfs: response.data,
        });
      })
      .catch((response) => {
        console.log('Failed ', response.data);
      });
  }

  makeDelete = (id) => {
    return () => {
      const context = this;
      axios
        .delete(`${context.url}/${id}`)
        .then((response) => {context.setState({smurfs: response.data})})
        .catch((response) => {console.log('Failed ', response.data)});
    }
  }

  makeEdit = (id, smurf) => {
    return () => {
      const context = this;
      return axios
        .put(`${context.url}/${id}`, smurf)
        .then((response) => {context.setState({smurfs: response.data})})
    }
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route exact path='/village' render={ (routeProps) => <SmurfForm {...routeProps} saveSmurf={this.addSmurf} name='' height='' age='' id={undefined}/> } />
        <Route path='/village' render={ (routeProps) => <Smurfs {...routeProps} smurfs={this.state.smurfs} makeDelete={this.makeDelete} makeEdit={this.makeEdit} />} />
      </div>
    );
  }
}

export default App;
