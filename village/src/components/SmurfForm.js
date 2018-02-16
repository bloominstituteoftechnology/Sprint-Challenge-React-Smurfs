import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  addSmurf = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3333/smurfs';

    axios
      .post(endpoint, this.state)
      .then(response => {
        this.props.getSmurfs();
      })
      .catch(error => console.log('there was an error', error));

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  updateName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  updateAge = event => {
    this.setState({
      age: event.target.value,
    });
  };

  updateHeight = event => {
    this.setState({
      height: event.target.value,
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            type="number"
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            type="number"
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
