import React, { Component } from 'react';
import './Smurfs.css';


class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  constructor(props) {
    super(props);
    this.state = {
      update: false,
      updateSmurf: {
        name: this.props.name,
        age: this.props.age,
        height: this.props.height
      }
    }
  }

  toggleUpdate = () => {
    let active = this.state.update;
    this.setState({update: !active})
  } 

  updateName = (event) => {
    this.setState({
      updateSmurf: {
        name: event.target.value
      }
    })
  }

  updateAge = (event) => {
    this.setState({
      updateSmurf: {
        age: event.target.value
      }
    })
  }

  updateHeight = (event) => {
    this.setState({
      updateSmurf: {
        event: event.target.value
      }
    })
  }

  updateSmurf = (event) => {
    event.preventDefault();
    const smurfUpdate = this.state.updateSmurf
    this.props.update(this.props.id, smurfUpdate);

  }

  render() {
    return (
      <div className="Smurfs--card">
        <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        <button onClick={() => this.props.delete(this.props.id) }>Delete</button> {'  '}
        <button onClick={this.toggleUpdate}>Update</button>
        <form className={this.state.update ? ".smurf--update" : "smurf--update__none"} onSubmit={this.updateSmurf}>
          <input value={this.state.updateSmurf.name} onChange={this.updateName} placeholder="name" />
          <input value={this.state.updateSmurf.age} onChange={this.updateAge} placeholder="age" />
          <input value={this.state.updateSmurf.height} onChange={this.updateHeight} placeholder="height" />
          <br/>
          <button type="submit" onClick={this.toggleUpdate}>Save</button>
        </form>
      </div>
      </div>
    ); 
  }
}

export default Smurfs;