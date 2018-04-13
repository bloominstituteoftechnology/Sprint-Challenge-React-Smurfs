import React, { Component } from "react";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }

  render() {
    return (
      <div className="Smurfs">
        <SmurfForm getSmurfList={this.props.getSmurfList} />
        <h1 style={{ color: "white" }}>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurf={smurf}
                getSmurfList={this.props.getSmurfList}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
