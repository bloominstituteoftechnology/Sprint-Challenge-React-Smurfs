import React, { Component } from 'react';
import axios from 'axios';



class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    axios
      .post(`${this.props.baseUrl}/smurfs`, this.state)
      .then(res => {
        this.setState({
          name: "",
          age: "",
          height: ""
        })
        { this.props.addSmurfs() }
        this.props.history.push("/");
      })
        
      .catch (err =>
    console.log(err))
  }
  
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
          <button type="submit" className="button">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
