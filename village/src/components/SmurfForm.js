import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Might need to add 'smurf'...check this config first
      // smurfs: [],
      smurf:{
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this .state.height,
    }
    this.props.addSmurf(newSmurf);
  
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      }
  

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf, [e.target.name]: e.target.value, } 
      });
    };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type= "text"
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes ={
  addSmurf: PropTypes.func,
}

export default SmurfForm;
