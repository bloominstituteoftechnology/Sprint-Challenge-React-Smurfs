import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SmurfUpdateForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  updateSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurfToUpdate = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id)
    const smurfId = smurfToUpdate.id;
    this.props.updateSmurf(smurfId, this.state)

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
    return (
      <div className="SmurfForm">
        <h3>Update Smurf</h3>
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
          <button type="submit" onClick={this.updateSmurf}>Update</button>
          <Link to='/smurfs'>Add New?</Link>         
        </form>
      </div>
    );
  }
}

export default SmurfUpdateForm;
