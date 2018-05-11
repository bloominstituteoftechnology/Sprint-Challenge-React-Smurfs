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

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurf: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
      const smurfData = { name: this.state.name, age: this.state.age, height: this.state.height }
      axios.post("http://localhost:3333/smurfs", smurfData)
        .then(addedSmurf => {
          this.componentDidMount()
        })
        .catch(err => {
          console.log(err)
        });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.age,
      [e.target.height]: e.target.value
     });
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
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;