import React, { Component } from "react";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";
import axios from "axios";


class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  deleteSmurf = id => {
    console.log("deleteFunction ", this.deleteSmurf);
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log("Error: NOT FOUND"));
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to="/">Home</Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button onClick={() => this.deleteSmurf(this.state.smurf)}>Delete</button>
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
