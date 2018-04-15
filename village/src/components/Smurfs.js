import React, { Component } from "react";
import SmurfCard from "./SmurfCard";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfCard smurf={smurf} fetchSmurfs={() => this.fetchSmurfs()} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
