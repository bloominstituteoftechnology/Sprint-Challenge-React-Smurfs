import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios.get("http://localhost:3333/smurfs")
          .then(res => this.setState({smurfs: res.data}))
          .catch(err => console.log(err))
  }

  addSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
         .then(res => this.setState({smurf, smurfs: res.data}))
         .catch(err => console.log(err))
  }

  updateSmurf = (id, updatedSmurf) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
          .then(res => this.setState({updatedSmurf, smurfs: res.data}))
          .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div>
          <NavLink to="/">Home</NavLink>
          </div>
          <div>
          <NavLink to="/form">Add Smurf</NavLink>
          </div>
          <div>
          <NavLink to="/update-form">Update</NavLink>
          </div>
        </nav>
        <Route path="/form" render= {(props) =>
        <SmurfForm
        {...props}
        addSmurf={this.addSmurf}/>}/>
        <Route exact path="/" render={(props) => <Smurfs
        {...props}
        smurfs={this.state.smurfs}/>}/>
        <Route path="/update-form" render={(props) => <UpdateForm
          {...props}
          updateSmurf={this.updateSmurf}
        />}/>
      </div>
    );
  }
}

export default App;
