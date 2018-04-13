import React, { Component } from "react";
import "./Smurf.css";
import SmurfForm from "./SmurfForm";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      height: props.height,
      id: props.id,
      delete: props.delete,
      update: props.update,
      inputIsHidden: true
    };
  }

  toggleInput = () => {
    this.setState({inputIsHidden: !this.state.inputIsHidden});
  }

  handleSubmit = obj => {
    this.state.update(obj, this.state.id);
    this.toggleInput();
  }

  render() {
    return (
      <div>
        <div className="Smurf">
          <h3>{this.state.name}</h3>
          <strong>{this.state.height} tall</strong>
          <p>{this.state.age} smurf years old</p>
        </div>
        <div className="Smurf-Buttons">
          <button onClick={this.toggleInput}>Edit Smurf</button>
          <button onClick={() => this.state.delete(this.state.id)}>
            Delete Smurf
          </button>
        </div>
        <div className={this.state.inputIsHidden ? "Hide" : "Smurf-Input"}>
          <SmurfForm submit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Smurf;
