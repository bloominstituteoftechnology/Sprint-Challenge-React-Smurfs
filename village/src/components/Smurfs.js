import React from "react";

import Smurf from "./Smurf";

const Smurfs = props => {

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <Smurf
              smurf={smurf}
              key={smurf.id}
              delete={props.delete}
              />
            );
          })}
        </ul>
      </div>
    );
}

export default Smurfs;
