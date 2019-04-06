import React, { Component } from 'react'

export default class EditSmurf extends Component {

  state ={
    name: '',
    age: '',
    height: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editSmurf = e => {
    e.preventDefault()
    this.edit = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }

    this.props.edit(this.edit)
  }

  render() {
    return (
      <div>
        <div className="editSmurf">
          <form onSubmit={this.editSmurf}>
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
            <button type="submit">Add to the village</button>
          </form>
        </div>
      </div>
    )
  }
}
