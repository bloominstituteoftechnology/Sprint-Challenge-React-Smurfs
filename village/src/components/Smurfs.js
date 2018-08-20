import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";
import axios from "axios";

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }
  deleteSmurf = id => {
    axios
      //need to find a way to identify each smurf entry
      .delete(`http://localhost:3333/smurfs/:${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to={`/`}>
          <button>Head Back Home</button>
        </Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  key={smurf.id}
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                />
                <button onClick={() => this.deleteSmurf(smurf.id)}>
                  Delete
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
