import React, { Component } from "react";
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      imgUrl: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(response => this.props.appSetState(response.data))
      .then(response => this.props.history.push('/village'))
  }

  render() {
    const { name, age, height, imgUrl } = this.state;

    return (
      <div>
        <form onSubmit={this.addSmurf} className="smurfForm">
          <h1>New Smurf!</h1>
          <div className="titleBorder" />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurfy Name"
            value={name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurfy Age"
            value={age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurfy Height"
            value={height}
            name="height"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurfy Image"
            value={imgUrl}
            name="imgUrl"
            type="text"
          />
          <button type="submit" className="submitButton">
            Make magic happen!
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
