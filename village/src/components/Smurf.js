import React, { Component } from "react";
import SmurfEditForm from "./SmurfEditForm";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  componentWillReceiveProps(props) {
      this.setState({
        editing: false
      })
  }
  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };
  render() {
    const { name, height, age, remove, update } = this.props;
    return (
      <div className="Smurf">
        {!this.state.editing ? (
          <div className="details">
            <h3>{name}</h3>
            <strong>{height} tall</strong>
            <p>{age} old</p>
            <button onClick={remove}>Delete</button>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        ) : (
          <div className="edit-details">
            <SmurfEditForm
              name={name}
              height={height}
              age={age}
              cancel={this.toggleEdit}
              onSubmit={update}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Smurf;
