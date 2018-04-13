import React from "react";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

const Pathfinder = () => {
  return (
    <div>
      {/* create(Post) field */}
      <SmurfForm getSmurfs={this.getSmurfs} />
      {/* read(Get) mapping of*/}
      <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
    </div>
  );
};

export default Pathfinder;
