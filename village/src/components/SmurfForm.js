import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(() => {
        this.setState({
          name: '',
          age: '',
          height: ''
        })
      })
      .catch(err => {
        console.error(err)
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
            className="input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="button button-add" type="submit">Add to the village</button>
        </form>
        <Link to="/" >
          <button className="button button-return"> Return </button>
        </Link>
      </div>
    );
  }
}

export default SmurfForm;
