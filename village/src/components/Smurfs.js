import React, { Component } from "react";
import axios from "axios";

import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  deleteSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let smurfId = event.target.id;
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`, this.state.smurfs)
      .then(response => {
        this.setState({
          smurf: response.data
        });
        window.location.reload();
      });
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button
                  id={smurf.id}
                  onClick={this.deleteSmurf}
                  className="delet"
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
