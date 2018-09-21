import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value} );
  };

  addSmurf = event => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', this.state)
    .then(response => this.setState({smurf: response.data}))
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
          <Link to="/smufs"><button onClick={this.addSmurf} type="submit">Add to the village</button></Link>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

//   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }