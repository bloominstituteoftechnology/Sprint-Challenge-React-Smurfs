import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from'./components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  addSmurf = (smurf) => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf )
      .then( response => {
        console.log(response)
        this.props.history.push('/');
        this.setState({ smurfs: this.state.smurfs })
        window.location.reload();
      })
      .catch(error => console.log(error))
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact path="/"
          render={(props) => <Smurfs
            {... props }
            smurfs ={ this.state.smurfs }/>}
        />
        <Route
          exact path="/smurfs-form"
          render={(props) => <SmurfForm
            {... props }
            addSmurf = {this.addSmurf }/>}
        />

      </div>
    );
  }
}

export default withRouter(App);
