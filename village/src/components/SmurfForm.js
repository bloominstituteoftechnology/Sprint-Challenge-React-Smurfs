import React, { Component } from 'react'
import axios from 'axios'
import { FormContainer, Form } from '../styles/SmurfForm'

class SmurfForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      occupations: '',
      img: ''
    }
  }

  addSmurf = event => {
    event.preventDefault()
    console.log(this.state)
    // add code to create the smurf using the api
    axios
      .post('/smurfs', this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.setState({
      name: '',
      occupations: '',
      img: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="occupations"
            value={this.state.occupations}
            name="occupations"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="img"
            value={this.state.img}
            name="img"
          />
          <button type="submit">Add to the village</button>
        </Form>
      </FormContainer>
    )
  }
}

export default SmurfForm
