import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newObj = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios
    .post('http://localhost:3333/smurfs', newObj)
    .then(res => {
      console.log('add smurf: ', res);
      console.log('add smurf: ', this.props);
      this.props.handleSetData(res.data);
      this.setState({
          name: '',
          age: '',
          height: ''
        })
    })
    .then(() => this.props.history.push('/smurfs'))
    .catch(err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      <Link to='/smurfs'><button type="submit" className='backButton'>Back to the Village</button></Link>
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
          <button type="submit">Add Smurf to the village</button>
          
        </form>
      </div>
    );
  }
}

export default SmurfForm;
