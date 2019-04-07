import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css';

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
    Axios.post('http://localhost:3333/smurfs', this.state)
      .then(response => {
        this.props.updateSmurfs(response.data);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
       ...prevState, [e.target.name]: value
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
     
        <form onSubmit={this.addSmurf}>
          <input
            
            placeholder="name"
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            
          />
          <input
            type="text"
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
