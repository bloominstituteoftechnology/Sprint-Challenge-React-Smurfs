import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addSmurf(e, this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
    document.location.reload();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
          />
          <button type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
