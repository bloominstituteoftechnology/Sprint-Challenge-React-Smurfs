import React, { Component } from 'react';
import axios from 'axios';

const createSmurf = (id, name, age, height) => {
  return {
    id,
    name,
    age,
    height
  };
};

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf(newSmurf) {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }

  submitHandler = e => {
    this.addSmurf(
      createSmurf(
        this.props.smurfs[this.props.smurfs.length - 1].id + 1,
        this.state.name,
        this.state.age,
        this.state.height
      )
    );
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={e => this.submitHandler(e)}>
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
