import React from "react";
import './Smurf.css'
class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Smurf">
        <h3 className="Name">{this.props.name}</h3>
        <strong className="Height">{this.props.height} tall</strong>
        <p className="Age">{this.props.age} years old</p>
        <button className="Delete" onClick={event => this.props.deleteSmurf(event, this.props.id)}>Delete Smurf</button>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;