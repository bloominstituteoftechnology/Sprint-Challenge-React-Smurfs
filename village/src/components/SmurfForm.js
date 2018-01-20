import React, { Component } from 'react';
import axios from 'axios';

export default class SmurfForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    };
    
    this.addSmurf = this.addSmurf.bind(this);
    // this.updateName = this.updateName.bind(this);
    // this.updateAge = this.updateAge.bind(this);
    // this.updateHeight = this.updateHeight.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const newSmurf = this.state.newSmurf;
    newSmurf[name] = value;
    this.setState({ newSmurf });
  }
  
  addSmurf(event) {
    event.preventDefault();
    console.log('state', this.state);
    const endpoint = 'http://localhost:3333/smurfs'
    const newSmurf = this.state.newSmurf;
    axios
      .post(endpoint, newSmurf)
      .then(response => {
        this.props.refresh();
        this.setState({ newSmurf });
      })
      // .then(loadSmurfs)
      .catch(() => {
        console.error('Could not add the Smurf');
      });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newSmurf.name}
          />
          <input
            type="number"
            id="age"
            name="age"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.newSmurf.age}
          />
          <input
            type="number"
            id="height"
            name="height"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.newSmurf.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}
