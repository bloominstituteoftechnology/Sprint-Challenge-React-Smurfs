import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => { // Map through smurfs object array
          return (
            <Smurf // Pass in all values instead of setting state in Smurf component
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              updateSmurf={props.updateSmurf}
              deleteSmurf={props.deleteSmurf}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Smurfs;
