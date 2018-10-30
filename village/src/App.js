import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      // smurf: {
      //   name:'',
      //   age: '',
      //   height: ''
      // },
      isUpdating: false,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("In Catch", err);
      })
  }

  handleAddNewSmurf = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", this.state.smurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Could not add new Smurfs :(", err);
      })
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value 
      }
    });
  };

  handleDeleteSmurf = id => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => this.setState({ smurfs: response.data }))
  }

  goToUpdateSmurfForm = (event, id) => {
    console.log('firing', id);
    event.preventDefault();
    const smurfToUpdate = this.state.smurfs.find(smurf => smurf.id === id);
    this.setState({ smurf: smurfToUpdate, isUpdating: true });
    console.log(smurfToUpdate)
  }

  handleUpdateSmurf = id => {
    console.log(id)
    axios
    .put(`http://localhost:3333/smurfs/${id}`, this.state.smurf)
    .then(response => {
      this.setState({
        smurfs: response.data,
        smurf: this.state.smurf,
        isUpdating: true,
      });
    })
    .catch(err => {
      console.log("Could not update existing Smurf", err);
    });
  }

  render() {
    // console.log(this.state.smurfs)
    return (
      <div className="App">

        <ul className="navbar">
          <li>
            <NavLink to="/smurf-form">
              Smurf Form
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
            Smurf Village
            </NavLink>
          </li>
        </ul>

        <Route path="/smurf-form" render={props => (
            <SmurfForm 
            {...props}
            // name={this.state.smurf.name}
            // age={this.state.smurf.age}
            // height={this.state.smurf.height}

            handleAddNewSmurf={this.handleAddNewSmurf} 
            smurf={this.state.smurf} 
            handleInputChange={this.handleInputChange}
            isUpdating={this.isUpdating}
            handleUpdateSmurf={this.handleUpdateSmurf}
            />
        )} 
        />

        <Route exact path="/" render={props => (
          <Smurfs smurfs={this.state.smurfs} 
            handleDeleteSmurf={this.handleDeleteSmurf}
            goToUpdateSmurfForm={this.goToUpdateSmurfForm}
          />
        )}
        />

      </div>
    );
  }
}

export default App;
