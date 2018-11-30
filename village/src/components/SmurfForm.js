import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  //cdm - if in edit mode, load smurf
  componentDidMount() {
  if (this.props.edit) {
    const smurf = this.props.smurfs.find(s => s.id == this.props.match.params.id);
    console.log(smurf);
    this.setState({...smurf});
  }
  }

  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = this.state;
    const func = this.props.edit ? this.props.editSmurf : this.props.addSmurf;
    func(newSmurf);
    this.props.history.push('/');


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const edit = this.props.edit || null;
    const buttonText = this.props.edit ? 'Edit Smurf' : 'Add to the Village'
    return (
      <div className="SmurfForm">
        {edit && <Smurf 
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          edit
        />
        }
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
