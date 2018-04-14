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
  }

  addSmurf = event => {
    // event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(savedSmurf => {
        console.log(savedSmurf);
      })
      .catch(err => {
        console.log(err);
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="text"
          />
          <button onClick={this.addSmurf} value="submit" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
