import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      smurfs: []
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .catch(function (error) {
        console.log(error);
      });

      this.props.refreshSmurfs;

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  updateSmurf = event => {
    event.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .catch(function (error) {
        console.log(error);
      });

      this.props.refreshSmurfs;

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
      <div className="SmurfForm" id="smurfForm">
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
          <input
            onChange={this.handleInputChange}
            placeholder="id"
            value={this.state.id}
            name="id"
          />
          <button type="submit">Add to the village</button>
          <button onClick={this.updateSmurf}>Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
