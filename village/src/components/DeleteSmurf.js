import React from "react";
import axios from "axios";

class DeleteSmurf extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteSmurf = event => {
    let URL = `http://localhost:3333/smurfs/${this.props.smurfId}`;
    console.log("DELETE SMURF BUTTON PROPS", this.props);
    console.log("DELETING SMURF ID", this.props.smurfId);
    // Get the individual smurf by id
    axios
      .delete(URL)
      .then(response => {
        console.log(`Smurf ${this.props.smurfId} has been deleted..`);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return <button onClick={this.handleDeleteSmurf}>Delete</button>;
  }
}

export default DeleteSmurf;
