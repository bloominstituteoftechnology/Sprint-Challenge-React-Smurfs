import React, { Component } from 'react';

class SmurfForm extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }



  handleSubmit = event => {
    event.preventDefault();
    if (this.props.isEditing) {
      this.props.editSmurf();
    } else {
      this.props.makeSmurf();
    }
    this.props.history.push('/village');
  }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <h2>{this.props.isEditing ? 'Edit Smurf' : 'Add a Smurf'}</h2>
        <form action=''>
          <input
            type='text'
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit" onClick={this.handleSubmit}>{this.props.isEditing ? 'Update Smurf' : 'Add to village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
