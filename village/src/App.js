import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'

class App extends Component {
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
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(`Error fetching smurfs: ${error}`))
  }

  deleteSmurf = (e) => {
    axios.delete(`http://localhost:3333/smurfs/${e.target.id}`)
      .then(response => this.fetchSmurfs())
      .catch(error => console.log(`Error deleting smurf: ${error}`))
  }

  render() {
    return (
      <div className="App">
        <SmurfForm refreshParent={this.fetchSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    )
  }
}

export default App
