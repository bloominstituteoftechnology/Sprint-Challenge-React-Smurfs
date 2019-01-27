import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

const apiURL = 'http://localhost:3333/smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurfToEdit: {},
    };
  }

  componentDidMount() {
    axios.get(apiURL)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  addData = dataToAdd => {
    axios
      .post(apiURL, dataToAdd)
      .then(response => {
        this.setState({ smurfs: response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteData = id => {
    axios
      .delete(`${apiURL}/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch( error => {
        console.log(error);
      });
  }

  updateData = (dataForEdit, id )=> {
    axios
      .put(`${apiURL}/${id}`, dataForEdit)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route 
          exact path='/' 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteData={this.deleteData}/>} 
        />
        <Route 
          exact path='/add-a-smurf' 
          render={props => <SmurfForm {...props} addData={this.addData} />} />
        <Route 
        exact path='/edit-smurf/:id' 
        render={props => <SmurfForm {...props} updateData={this.updateData} smurfs={this.state.smurfs} edit/>} />
      </div>
    );
  }
}

export default App;
