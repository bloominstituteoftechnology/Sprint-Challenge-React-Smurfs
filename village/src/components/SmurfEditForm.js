import React, { Component } from 'react';


class SmurfEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
    };
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    const {name, age, height} = this.state;
    if(name && age && height) {
      this.props.onSubmit({...this.state, id: this.props.id});
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }

  render() {

    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
            required={true}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
            required={true}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
            required={true}
          />
          <button type="submit" disabled={(this.props.name === this.state.name && this.props.age === this.state.age && this.props.height === this.state.height)}>Update Smurf</button>
          <button type="button" onClick={this.props.cancel}>cancel</button>
        </form>
      </div>
    );
  }
}


export default SmurfEditForm;