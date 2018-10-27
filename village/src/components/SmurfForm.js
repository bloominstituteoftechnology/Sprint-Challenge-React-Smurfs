import React, { Component } from "react"

class SmurfForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      height: ""
    }
  }

  addSmurf = event => {
    event.preventDefault()
    // add code to create the smurf using the api
    this.props.addSmurf(this.state)

    this.setState({
      name: "",
      age: "",
      height: ""
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">mode_edit</i>
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">mode_edit</i>
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            <i class="material-icons right">send</i>
            Add Smurf
          </button>
        </form>
      </div>
    )
  }
}

export default SmurfForm
