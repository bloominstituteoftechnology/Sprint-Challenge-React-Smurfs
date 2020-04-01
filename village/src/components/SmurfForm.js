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
  }

  addSmurf = event => {
    event.preventDefault();
      axios.post('http://localhost:3333/smurfs', this.state)
        .then(response => {
          this.setState({
            smurf: {
              name: '',
              age: '',
              height: ''
            }
          })
          window.location.reload();
          this.props.history.push('/')
          console.log(response);
        })
        .catch(error => console.log(error));

    this.setState({
      name: '',
      age: '',
      height: ''
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
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type='number'
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
