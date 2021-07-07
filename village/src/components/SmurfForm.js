import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    if(this.props.edit) {
      this.props. editSmurf(
        this.state,
        this.props.match.params.id
      )
    } else {
      this.props.addSmurf(this.state)
    }
    this.props.history.push('/')

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>{this.props.edit ? 'Update Smurf' : 'Add New Smurf'}</h2>
        <form onSubmit={this.addSmurf}>
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
          <button >{this.props.edit ? 'Update Smurf' : 'Add New Smurf'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
