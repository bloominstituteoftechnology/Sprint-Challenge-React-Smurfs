import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  DeleteSmurf = (event, id) => {
    event.preventDefault();
    console.log(id);
    // add code to create the smurf using the api
    axios
      .delete('/id=0')
      .then(response => {
        console.log(response);
        // this.props.history.push('/item-list');
      })
      .catch(error => console.log(event.target));
  };

  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/smurf-form">Add a Smurf</NavLink>
            </div>
          </nav>
        </div>

        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              match={props.match}
              history={props.history}
              location={props.location}
              smurfs={this.state.smurfs}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} DeleteSmurf={this.DeleteSmurf} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
