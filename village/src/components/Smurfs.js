import React, { Component } from "react";
import { CardColumns } from "reactstrap";
import axios from "axios";
import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  newSmurf = data => {
    this.setState({ smurfs: data });
  };
  render() {
    return (
      <div className="Smurfs">
        <CardColumns>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
