import React, { Component } from "react";
import Smurf from "./Smurf";
import SmurfCard from "./SmurfCard";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
          {/*render list of SmurfCards*/}
              <SmurfCard
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                fetchSmurfs={() => this.fetchSmurfs()}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
