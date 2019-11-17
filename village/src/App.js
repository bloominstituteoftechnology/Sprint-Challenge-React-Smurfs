import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: ""
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  handleSetData = data => this.setState({ smurfs: data });

  componentDidMount() {
    Axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("GET RESPONSE: ",response);
        this.setState({smurfs: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDeleteSmurf = id => {
    console.log(id)
    Axios 
      .delete(`${"http://localhost:3333/smurfs"}/${id}`)
      .then(response => {
        console.log(response);
        this.setData(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSmurf = e => {
    this.setState({ smurf: e.target.value});
  }

  handleSubmitSmurf = event => {
    event.preventDefault();
    const smurff = this.state.smurf;
    Axios
      .post("http://localhost:3333/smurfs", {smurff: smurff})
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ smurfs: response.data, smurf: "" });
      })
      .catch(error => console.log(error));
  }



  render() {
    return (
      <div className="App">
        <SmurfForm 
          handleSubmitSmurf={this.handleSubmitSmurf}
          handleSmurf={this.handleSmurf}
          value={this.state.smurf}
        />
        <Smurfs 
          smurfs={this.state.smurfs} 
          handleDeleteSmurf={this.handleDeleteSmurf}
        />
      </div>
    );
  }
}

export default App;
