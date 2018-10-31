import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
// import App from './App.js';
import Smurfs from './Smurfs';
// import Smurfs from './components/Smurfs';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
    this.handleInputChange = this.handleInputChange;
    this.buttonSubmit = this.buttonSubmit;
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      smurfs: [],
      name: '',
      age: '',
      height: ''
    });
    this.handleInputChange = this.handleInputChange;
    this.buttonSubmit = this.buttonSubmit;
  }
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => { throw new Error(err) })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buttonSubmit = () => {
    const { name, age, height } = this.state;
    axios.post('http://localhost:3333/smurfs', { name, age, height })
      .then((response) => {
        this.setState({ smurfs: response.data, name: '', age: '', height: '' })
      })
  }



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
          <button onClick={this.buttonSubmit}>Add to the village</button>
        </form>
        
      </div>
    );
  }
}

export default SmurfForm;
