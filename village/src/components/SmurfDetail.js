import React from "react";
// import axios from "axios";

class SmurfDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }
  componentDidMount() {
    let id;
    if (this.props.id) {
      id = this.props.id;
    } else {
      id = this.props.match.params.id;
    }
    console.log(id);
    const foundSmurf = this.props.smurfs.find(smurf => smurf.id === Number(id));
    if (!foundSmurf) return;
    this.setState({ smurf: foundSmurf });
  }

  render() {
    const { name, height, age } = this.state.smurf;
    return (
      <div className="Smurf">
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </div>
    );
  }
}

export default SmurfDetail;
