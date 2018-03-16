import React, { Component } from 'react';
import SmurfUpdate from './SmurfUpdate';

class Smurf extends Component {
  state = {
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    });
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} old</p>
        <SmurfUpdate key={this.state.id} id={this.state.id}/>
      </div>
    );
  }
}

export default Smurf;