import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  let smurf;
  if (props.match) {
    smurf = props.smurfs.filter(smurf => {
      return +smurf.id === +props.match.params.id;
    })[0];
  } else {
    smurf = null;
  }

  return (
    <div className="smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurf == null ? (
          props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={() => props.deleteSmurf(smurf.id)}
                update={() => props.updateSmurf(smurf.id)}
              />
            );
          })
        ) : (
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            delete={() => props.deleteSmurf(smurf.id)}
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
