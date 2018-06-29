import React, { Component } from 'react';
import { post } from 'axios';
import trycatch from '../utils/trycatch';

const URL = 'http://localhost:3333/smurfs'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = async event => {
    event.preventDefault();

    const { state: newSmurf } = this
    const { data, 
            error } = await trycatch(post(URL, newSmurf)) 

    if (!error) {
      const { data: smurfs } = data
      const { updateHandler } = this.props

      updateHandler(smurfs)

      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }

    if (error) console.log('uh oh', error)
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
          <button 
            onSubmit={this.addSmurf} 
            type="submit">Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
