import React from 'react';

import Smurf from './Smurf';

function Smurfs(props) {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              makeDelete={props.makeDelete}
              makeEdit={props.makeEdit}
              match = {props.match}
              history = {props.history}
            />
        ))}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
