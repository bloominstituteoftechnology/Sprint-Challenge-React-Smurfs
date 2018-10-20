import React from "react";

import "./Smurf.css";

class Smurf extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    height: this.props.height,
    id: this.props.id,
    display: false
  };

  render() {
    return (
      <div>
        {!this.state.display ? (
          <div className="card">
            <h3>{this.props.name}</h3>
            <p>Age: {this.props.age}</p>
            <p>Height: {this.props.height}</p>
            <button onClick={this.displayForm}>update</button>
            {!this.state.display ? (
              <button
                onClick={() => {
                  this.props.onDelete(this.props);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        ) : null}
        {!this.state.display ? null : (
          <div className="update-form">
            <form onSubmit={this.submitHandler} className="format">
              <input
                onChange={this.updateName}
                placeholder="name"
                value={this.state.name}
              />
              <input
                onChange={this.updateAge}
                placeholder="age"
                value={this.state.age}
              />
              <input
                onChange={this.updateHeight}
                placeholder="height"
                value={this.state.height}
              />
              <button type="submit">Update</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  submitHandler = event => {
    event.preventDefault();
    const { name, age, height, id } = this.state;
    const smurf = { name, age, height, id };
    console.log(smurf);
    this.props.onUpdate(smurf);
    this.setState(previous => {
      return { display: !previous.display };
    });
  };

  displayForm = event => {
    this.setState({ display: !this.state.display });
  };

  updateName = event => {
    this.setState({
      name: event.target.value
    });
  };

  updateAge = event => {
    this.setState({
      age: event.target.value
    });
  };

  updateHeight = event => {
    this.setState({
      height: event.target.value
    });
  };
}

export default Smurf;
