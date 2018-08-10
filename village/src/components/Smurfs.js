import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  if (props.match) {
    var smurf = props.smurfs.filter(smurf => {
      return +smurf.id === +props.match.params.id
    })[0];
  } else {
    var smurf = null;
  }

  return (
    <div className="smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurf == null ? props.smurfs.map(smurf => {
          return (
            <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={() => props.deleteSmurf(smurf.id)}
                update={() => props.updateSmurf(smurf.id)}
              />
            </div>
          );
          }) : 
            <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={() => props.deleteSmurf(smurf.id)}
                update={() => props.updateSmurf(smurf.id)}
              />
            </div>
        }
      </ul>
    </div>
  );
}

Smurfs.defaultProps = {
 smurfs: [],
};

export default Smurfs;
