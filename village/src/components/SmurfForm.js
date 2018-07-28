import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: function () { return this.smurfs[this.smurfs.length - 1].id },
      name: '',
      age: '',
      height: '',
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(response => { this.setState({ smurfs: response.data }) })
      .catch(err => { console.log(err) })
  }

  addSmurf = event => {
    // add code to create the smurf using the api
    let id = this.state.id() + 1;
    axios.post(`http://localhost:3333/smurfs`, { id: id, name: this.state.name, age: Number(this.state.age), height: this.state.height })
      .then(() => { console.log("Added new Smurf!") })
      .catch(err => { console.log(err) })

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
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            min="1"
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
