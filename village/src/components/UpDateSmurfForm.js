import React from "react";
import axios from "axios";

class UpDateSmurfForm extends React.Component {
  constructor() {
    super();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h3>Update Form</h3>
        <form onSubmit={() => this.props.edit(this.props.id)}>
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            required
            name="updateName"
            placeholder="change name"
          /><input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            required
            name="updateAge"
            placeholder="change age"
          /><input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            required
            name="updateHeight"
            placeholder="change height"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default UpDateSmurfForm;