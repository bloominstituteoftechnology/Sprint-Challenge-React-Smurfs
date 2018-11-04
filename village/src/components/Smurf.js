import React from "react";
import axios from "axios";

class Smurf extends React.Component {

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(res => {
      this.setState({ smurfs: res.data });
    });
  };

  render() {
    return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={this.deleteSmurf}>delete</button>
      <button>update</button>
    </div>
    );
}
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
