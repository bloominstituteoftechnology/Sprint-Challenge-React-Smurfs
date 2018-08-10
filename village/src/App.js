import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Header from './components/Header';


const url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: true
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        smurfs: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  remove(id) {
    axios.delete(`${url}/${id}`)
      .then((response) => {
        console.log(response)})
        .catch((error) => {
        console.log(error)});
      window.location.reload();
  }
  render() {
    if (!this.state.loading){
      return (
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route
              exact
              path="/smurfs"
              render={props => (
                <Smurfs
                  {...props}
                  smurfs={this.state.smurfs}
                  loading={this.state.loading}
                  remove={this.remove}
                />
              )}
          />
          <Route
              exact path="/smurfs/:id"
              render={props => (
                <Smurf
                  {...props}
                  smurfs={this.state.smurfs}
                  loading={this.state.loading}
                />
              )}
            />         
        </div>
      );
    } else{
      return null;
   }
  } 
}

export default App;
