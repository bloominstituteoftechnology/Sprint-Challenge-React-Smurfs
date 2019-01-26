import React from 'react';
import Smurf from './Smurf.js';

const SingleSmurf = props => {
  let smurf = props.smurfs.find(sm => {
    return sm.id === Number(props.match.params.id);
  });

  return (
    <Smurf
      {...props}
      name={smurf.name}
      id={smurf.id}
      age={smurf.age}
      height={smurf.height}
      key={smurf.id}
      deleteSmurf={props.deleteSmurf}
    />
  );
};

export default SingleSmurf;
