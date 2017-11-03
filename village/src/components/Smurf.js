import React, { Component } from 'react';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  }
  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }
  render() {
    const { name, height, age, remove } = this.props;
    return (
      <div className="Smurf">
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} old</p>
        <button onClick={remove}>Delete</button>
        <button onCLick={this.toggleEdit}>Edit</button>
      </div>
    );
}

}

export default Smurf;