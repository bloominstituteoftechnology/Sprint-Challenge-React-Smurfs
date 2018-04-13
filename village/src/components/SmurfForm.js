import React, { Component } from 'react'
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const blankState = { name: '', age: '', height: '' }
    if (this.gotNewSmurf(prevProps)) {
      if(this.editingSmurf()) {
        axios.get(`http://localhost:3333/smurfs/${this.props.currentSmurfId}`)
          .then(({ data }) => this.setState({
            name: data.name,
            age: data.age,
            height: data.height,
          }))
          .catch(error => console.log(`Error fetching smurf for update: ${error}`))
      } else if (!this.editingSmurf() && this.state != blankState) {
        this.setState(blankState)
      }
    }
  }

  addOrUpdateSmurf = event => {
    event.preventDefault()
    if (this.editingSmurf()) {
      axios.put(`http://localhost:3333/smurfs/${this.props.currentSmurfId}`, this.state)
        .then(response => this.props.refreshParent())
        .catch(error => console.log(`Error updating smurf: ${error}`))
    } else {
      axios.post('http://localhost:3333/smurfs', this.state)
        .then(response => {
          this.setState({
            name: '',
            age: '',
            height: ''
          })
          this.props.refreshParent()
        })
        .catch(error => console.log(`Error creating smurf: ${error}`))
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  gotNewSmurf = (prevProps) => this.props.currentSmurfId != prevProps.currentSmurfId
  editingSmurf = () => this.props.currentSmurfId >= 0

  submitText() {
    if (this.editingSmurf()) {
      return "Edit Smurf"
    } else {
      return "Add Smurf"
    }
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addOrUpdateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.submitText()}</button>
        </form>
      </div>
    )
  }
}

export default SmurfForm
