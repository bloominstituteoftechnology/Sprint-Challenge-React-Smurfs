import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // Fetch the data for friends list
  fetchData() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data})
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  addNewSmurf = (e, smurf) => {
    console.log(smurf)
    
    this.setState({smurf}, () => {console.log(this.state);});

    axios.post('http://localhost:3333/smurfs', this.state.smurf)
      .then(response => this.setState({ smurfs :response.data, smurf: this.state.smurf}))
      .catch(error => console.log(error));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Navigation />
        <Route exact path="/" render={ props =>
          <Header />
        } />
        <Route path="/smurfs" render={ props =>
          <Fragment>
            <SmurfForm
            addNewSmurf={this.addNewSmurf}
            /> 
            <Smurfs
              smurfs={this.state.smurfs}
            />
          </Fragment>
        } />
      </div>
    );
  }
}

export default App;
