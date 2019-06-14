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
      smurfs: [],
      EditedSmurf: {
        name: '',
        height: '',
        age: ''
      }
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
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => console.log(event.target));
  };

  changeHandler = ev => {
    this.setState({
      smurfs: {
        ...this.state.EditedSmurf,
        [ev.target.name]: ev.target.value
      }
    });
  };

  ChangeSmurfAge = (event, id) => {
    event.preventDefault();
    // add code to create the smurf using the api
    console.log(event);
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(id);
    axios
      .put(`http://localhost:3333/smurfs/${id}`, this.state.EditedSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          EditedSmurf: {}
        });
      })
      .catch(error => console.log(error));
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
          render={props => (
            <Smurfs
              {...props}
              ChangeSmurfAge={this.ChangeSmurfAge}
              DeleteSmurf={this.DeleteSmurf}
              smurfs={this.state.smurfs}
              EditedSmurf={this.state.EditedSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
