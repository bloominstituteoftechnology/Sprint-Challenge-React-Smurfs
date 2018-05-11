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

  // componentDidMount() {
  //   this.addSmurf()
  // }

  // addSmurf = event => {
  //   // event.preventDefault();
  //   axios.get('http://localhost:3333/smurfs')
  //     .then(response => this.setState({ smurfs: response.data }))
  //     .catch(err => console.log(err))
  // }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonSubmit = () => {
    const { name, age, height } = this.state
    axios.post('http://localhost:3333/smurfs', { name, age, height })
      .then( (response) => {
        this.setState({ smurfs: response.data, name: '', age: '', height: ''})
      })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Enter name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter age"
            value={this.state.age}
            name="age"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.buttonSubmit}>Add to the village</button>
        </form>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default SmurfForm;
