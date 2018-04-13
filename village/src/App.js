import React, { Component } from "react";
import axios from 'axios'

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import "./App.css";

export default class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
      currentSmurfId: -1
    }
  }

  componentDidMount() {
    this.fetchSmurfs()
  }
  
  fetchSmurfs = () => {
    this.setState({ currentSmurfId: -1 })
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(`Smurf doesn't exist: ${error}`))
  }

  deleteSmurf = (e) => {
    axios.delete(`http://localhost:3333/smurfs/${e.target.id}`)
      .then(response => this.fetchSmurfs())
      .catch(error => console.log(`Error deleting smurf: ${error}`))
  }

  selectSmurf = (e) => {
    this.setState({ currentSmurfId: e.target.id })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm refreshParent={this.fetchSmurfs} currentSmurfId={this.state.currentSmurfId} clearSelection={this.clearSelection} />
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} selectSmurf={this.selectSmurf} />
      </div>
    )
  }
}

// export default App
