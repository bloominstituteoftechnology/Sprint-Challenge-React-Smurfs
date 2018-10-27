import React from "react";
import axios from "axios";

class Smurf extends React.Component {
  constructor() {
    super();

    this.state = {
      smurf: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSmurf(id);
  }

  getSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        const rightSmurf = response.data.find(smurf => `${smurf.id}` === id);
        this.setState({ smurf: rightSmurf });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.smurf) {
      return <div />;
    } else {
      return (
        <div className="Smurf">
          <h3>{this.state.smurf.name}</h3>
          <strong>{this.state.smurf.height} tall</strong>
          <p>{this.state.smurf.age} smurf years old</p>
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
