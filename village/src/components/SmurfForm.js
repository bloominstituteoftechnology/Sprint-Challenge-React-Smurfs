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
    // add code to create the smurf using the api
    const newSmurfObj = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .post('http://localhost:3333/smurfs', newSmurfObj)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    console.log('The props are:', this.props);
    this.props.history.push(`/`);
  };

  DeleteSmurf = (event, id) => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
        // this.props.history.push('/item-list');
      })
      .catch(error => console.log(error));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
          <input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
          <input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height" />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
