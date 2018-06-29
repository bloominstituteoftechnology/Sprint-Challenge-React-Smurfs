
import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
    this.handleSubmitSmurf = this.handleSubmitSmurf.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmitSmurf = e => {
    e.preventDefault();
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    console.log(smurf);
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
        console.log("POST RESPONSE", response);
          this.setState({ smurfs: response.data, name: '', age: '', height: '' })
    })
    .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("GET RESPONSE", response);
      this.setState({ smurfs: response.data });
    })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmitSmurf}>
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
