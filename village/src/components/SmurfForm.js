import React, { Component } from 'react';
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
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    // add code to create the smurf using the api
    this.props.postSmurf(newSmurf);
    
    this.setState({
      name: '',
      age: '',
      height: ''
    })
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
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type='text'
          />
          <button type="submit">Add to the village</button>
          <Link to='/'className='ilink'><button>Go to Village</button></Link>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
