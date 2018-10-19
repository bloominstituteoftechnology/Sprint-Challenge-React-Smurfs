import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', height: '' };
  }

  addSmurf = e => {
    e.preventDefault();
    axios
      .post(this.props.URL, {
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        height: this.state.height
      })
      .then(() => {
        this.props.updateSmurfs(this.props.URL);
        this.setState({ name: '', age: '', height: '' });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
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
