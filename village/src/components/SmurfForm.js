import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf = event => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3333/smurfs', this.state)
    .then(() => {
      this.props.getSmurfs();
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }
  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }
  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
