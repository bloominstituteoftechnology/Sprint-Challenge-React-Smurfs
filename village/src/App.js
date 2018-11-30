import React, { Component } from 'react';

import { Route, NavLink } from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editSmurf:{},
    };
  }

componentDidMount(){
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({ 
        smurfs: response.data 
      });
    })
    .catch(err => {
      console.log(err);
    });
}

addToList = (obj) => {
  axios.post('http://localhost:3333/smurfs', obj)
  .then(response => {
    this.setState({
      smurfs: response.data
    })
  })
  .catch(err => console.log(err))
}

deleteItem = id => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data
      });
    })
    .catch(err => console.log(err));
};

updateToList = (id, obj) => {
  console.log(id);
  this.setState({
    editSmurf: {}
  })
  axios 
    .put(`http://localhost:3333/smurfs/${id}`, obj)
    .then(response => {
      console.log(id);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
}

updateStart = (obj) =>{
  this.setState({
    editSmurf: obj
  })
  console.log(this.state.editSmurf)
}

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Village</NavLink>
          <NavLink to={this.state.editSmurf.name ? `/smurf-form/${this.state.editSmurf.id}` : '/smurf-form'}>Form</NavLink>
        </nav>
        <Route
          exact path="/"
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteItem={this.deleteItem} updateStart={this.updateStart}  />}
        />
        <Route
          path="/smurf-form"
          render={(props) => <SmurfForm {...props} addToList={this.addToList} updateToList={this.updateToList} editSmurf={this.state.editSmurf} />}
        />
        
        
      </div>
    );
  }
}

export default App;
