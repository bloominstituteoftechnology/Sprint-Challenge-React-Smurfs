import React, { Component } from 'react';

class SmurfForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     age: '',
  //     height: ''
  //   };
  // }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="SmurfForm">
      {' '}
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;


