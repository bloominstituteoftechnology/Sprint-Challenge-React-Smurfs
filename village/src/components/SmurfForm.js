import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../SmurfForm.css';


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
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      this.setState({
        smurfs: response.data
      }, () => this.props.history.push('/smurfs'));
    })
    .catch(err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf} className='smurf-form'>
          <input className='form-input'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input className='form-input'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input className='form-input'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf} className='form-input'>Add to the village</button>
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes = {
  newSmurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string
  }),
  addSmurf: PropTypes.func,
  handleInputChange: PropTypes.func
}

export default SmurfForm;
