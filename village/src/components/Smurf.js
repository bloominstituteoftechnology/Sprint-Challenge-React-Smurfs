import React from "react";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <div className="Smurf">
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <div className="button-wrapper">
            <button
              type="button"
              className="delete-button"
              onClick={event => {
                this.props.deleteSmurf(event, this.props.id);
              }}
            >
              Delete Smurf?
            </button>
            <button
              type="button"
              className="edit-button"
              onClick={event => {
                this.toggleEditing(event);
              }}
            >
              Edit Smurf
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Smurf">
          <form
            className="edit-form"
            onSubmit={event => {
              this.props.updateSmurf(event, this.props.id);
            }}
          >
            <input
              onChange={event =>
                this.props.editsChangeHandler(
                  event.target.name,
                  event.target.value
                )
              }
              placeholder="name"
              value={this.props.editedSmurf.name}
              name="name"
            />
            <input
              onChange={event =>
                this.props.editsChangeHandler(
                  event.target.name,
                  event.target.value
                )
              }
              placeholder="age"
              value={this.props.editedSmurf.age}
              name="age"
            />
            <input
              onChange={event =>
                this.props.editsChangeHandler(
                  event.target.name,
                  event.target.value
                )
              }
              placeholder="height"
              value={this.props.editedSmurf.height}
              name="height"
            />
            <button type="submit">Submit changes</button>
          </form>
          <button
            onClick={() => {
              this.toggleEditing();
            }}
          >
            Cancel edit
          </button>
        </div>
      );
    }
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
