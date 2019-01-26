import React, { Component } from "react";

class SmurfForm extends Component {
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            placeholder="name"
            value={this.props.newSmurf.name}
            name="name"
          />
          <input
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            placeholder="age"
            value={this.props.newSmurf.age}
            name="age"
          />
          <input
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            placeholder="height"
            value={this.props.newSmurf.height}
            name="height"
          />
          <button type="submit">What's a few more smurfs gonna hurt?</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

