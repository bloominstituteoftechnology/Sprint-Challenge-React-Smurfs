import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Nav from './components/nav/nav'
import EditSmurf from './components/editsmurf'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
      serverUrl: 'http://localhost:3333/smurfs',
    };
  }
  componentDidMount = () =>
    axios
      .get(this.state.serverUrl)
      .then(smurfs => this.setState({smurfs: smurfs.data}))
      .catch(err => console.log('Error getting smurfs: ', err))

  addSmurf = smurf =>
    axios
      .post(this.state.serverUrl, smurf)
      .then(smurfs => this.setState({smurfs: smurfs.data}))
      .catch(err => console.log('Error adding smurf:', err))

  editSmurf = smurf => {
    axios
      .put(`${this.state.serverUrl}/${smurf.id}`, smurf)
      .then(smurfs => this.setState({smurfs: smurfs.data}))
      .catch(err => console.log('Error editing smurf:', err))
  }

  removeSmurf = smurf =>
    axios
      .delete(`${this.state.serverUrl}/${smurf.id}`)
      .then(smurfs => this.setState({smurfs: smurfs.data}))
      .catch(err => console.log('Error removing intruder:', err))

  render = () => {
    return (
    <div className="App">
      <Nav />
      <Route exact path='/' render={ props =>
        <Smurfs
          {...props}
          smurfs={this.state.smurfs}
          remove={this.removeSmurf}
        />
      }/>
      <Route exact path='/add' render={props =>
        <SmurfForm 
          {...props}
          add={this.addSmurf}
        />
      }/>
      <Route path='/smurf/:id/edit' render={props =>
        <EditSmurf
          {...props}
          smurfs={this.state.smurfs}
          edit={this.editSmurf}
        />
      }/>
    </div>
    )}
}

export default App