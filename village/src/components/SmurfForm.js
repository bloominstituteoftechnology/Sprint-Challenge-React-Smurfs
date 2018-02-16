import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
    state = {
      name: '',
      age: '',
      height: ''
    }

    addSmurf = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      })
      .then(response => {
        this.setState({
          name: '',
          age: '',
          height: '',
        })
        this.props.onCreate();
      })
      .catch(error => {
        console.error("Error Adding Smurf: ", error);
      });
    }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
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