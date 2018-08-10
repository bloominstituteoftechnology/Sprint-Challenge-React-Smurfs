import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

const API_URL = 'http://localhost:3333';
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

  async componentDidMount() {
    try {
      const response = await axios.get(`${API_URL}/smurfs`);

      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  addSmurf = async smurfData => {
    try {
      const response = await axios.post(`${API_URL}/smurfs`, smurfData);

      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteSmurf = async smurfId => {
    try {
      const response = await axios.delete(`${API_URL}/smurfs/${smurfId}`);
      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  editSmurf = async (smurfId, data) => {
    try {
      const response = await axios.put(`${API_URL}/smurfs/${smurfId}`, data);
      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/smurfs/add">
            Add Smurf
          </NavLink>
        </div>
        <Route
          exact
          path="/smurfs/add"
          render={props => (
            <SmurfForm
              {...props}
              onSubmit={data => {
                this.addSmurf(data);
                props.history.push('/');
              }}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              onDelete={this.deleteSmurf}
              onEdit={this.editSmurf}
            />
          )}
        />

        <Route
          exact
          path="/smurfs/:id"
          render={({
            match: {
              params: { id }
            }
          }) => {
            const found = this.state.smurfs.find(smurf => {
              return smurf.id == id;
            });

            if (found) {
              return (
                <Smurf
                  name={found.name}
                  id={found.id}
                  age={found.age}
                  height={found.height}
                  key={found.id}
                  onDelete={this.deleteSmurf}
                  onEdit={this.editSmurf}
                />
              );
            } else {
              return null;
            }
          }}
        />
      </div>
    );
  }
}

export default App;
