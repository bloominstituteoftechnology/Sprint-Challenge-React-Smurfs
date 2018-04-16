import React, { Component } from 'react'

import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import { Provider, Data } from './Context'

Data.getData()

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor (props) {
    super(props)
    this.state = {
      smurfs: []
    }
  }
  async componentDidMount () {
    await this.updateState()
  }

  async updateState () {
    await Data.getData()
    this.setState(prevState => ({ smurfs: [...Data.store] }))
  }

  async updateStateAfterPost (dataToPost) {
    await Data.postData(dataToPost)
    this.updateState()
  }

  async updateStateAfterDelete (idForDeletion) {
    await Data.deleteData(idForDeletion)
    this.updateState()
  }

  render () {
    return (
      <div className='App'>
        <Provider
          value={{
            smurfs: [...this.state.smurfs],
            handleDelete: id => this.updateStateAfterDelete(id)
          }}
        >
          <SmurfForm addSmurf={async d => this.updateStateAfterPost(d)} />
          <Smurfs />
        </Provider>
      </div>
    )
  }
}

export default App
