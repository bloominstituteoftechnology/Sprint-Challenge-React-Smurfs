import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  if (props.match) {
    var smurf = props.smurfs.find(smurf => {
      return +smurf.id === +props.match.params.id;
    });
  }

  return (
    <div className="smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurf == null ? (
          props.smurfs.map(smurf => {
            return (
              <Smurf
                smurf={smurf}
                key={smurf.id}
                delete={() => props.deleteSmurf(smurf.id)}
                update={() => props.updateSmurf(smurf.id)}
              />
            );
          })
        ) : (
          <Smurf
            smurf={smurf}
            delete={() =>
              props.deleteSmurf(smurf.id, () => {
                window.location = "/smurfs";
              })
            }
            update={() => props.updateSmurf(smurf.id)}
          />
        )}
      </ul>
    </div>
  );
};

Smurfs.defaultProps = {
  smurfs: []
};

export default Smurfs;
