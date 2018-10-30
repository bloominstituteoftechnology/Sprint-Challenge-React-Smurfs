import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      name: '',
      age: '',
      height: ''
    };
  }

  // add code to create the smurf using the api
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(() => {
      console.error("Error getting smurfs");
    });
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(response => {
        this.setState({ smurfs: response.data, name:'', age:'', height:''});
      })
      .catch(error => {
        console.error("Error making post", error);
      })
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
    // reset inputs or duplicated in line 21??

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input  className="InputElement"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input  className="InputElement"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input  className="InputElement"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="btn-NavButton" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
