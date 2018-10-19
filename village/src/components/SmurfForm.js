import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: (this.props.id ? this.props.id : null),
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state);
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    if (this.state.id == null)
      this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
          <button to="/" className="button" onClick={this.addSmurf}>
            {!this.props.id ? 'Add to the village' : 'Modyfy Smurf'}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
