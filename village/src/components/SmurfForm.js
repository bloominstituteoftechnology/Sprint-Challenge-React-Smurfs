import React, { Component } from 'react';
import './smurf.css';

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
    this.props.newSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <div className="form">
          <form onSubmit={this.addSmurf}>
          <label>
            Name:
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            /> <br></br>
          </label>
          <label>
            Age:
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            /> <br></br>
          </label>
          <label>
            Height:
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </label>
          
          <button className="submit" type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
        </div>
        
      </div>
    );
  }
}

export default SmurfForm;
