import React, { Component } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';

import './App.css';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        this.setState({
          smurfs: response.data,
          errorMessage: null
        })
      })
      .catch(error => {
        this.setState({ errorMessage: 'Error fetching smurfs! Check your URL' });
        setTimeout(() => {
          this.setState({ errorMessage: null });
        }, 2000)
      }
      );
  }



  setSmurfData = data => this.setState({ smurfs: data })

  setErrorHandler = errMsg => {
    this.setState({ errorMessage: errMsg })
    setTimeout(() => {
      this.setState({ errorMessage: null })
    }, 2000);
  }


  editSmurf = (id) => {
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    axios.put(`http://localhost:3333/smurfs/${id}`, newSmurf)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }


  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />

        {this.state.errorMessage !== null ? (
          <h3 style={{ color: 'red' }} >{this.state.errorMessage}</h3>) : null}

        <Route
          path="/smurfs"
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} setSmurfData={this.setSmurfData} setErrorHandler={this.setErrorHandler} deleteSmurf={this.deleteSmurf} />}
        />

                     {/* <Route path="/smurfs/${id}" /> */}
      </div>
    );
  }
}

export default App;
