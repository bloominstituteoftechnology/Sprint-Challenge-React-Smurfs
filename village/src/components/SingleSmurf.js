import React from 'react';
import Smurf from './Smurf.js';

const SingleSmurf = props => {
  let theSmurf = props.smurfs.find(sm => {
    return sm.id === Number(props.match.params.id);
  });

  return (
    <Smurf
      {...props}
      name={theSmurf.name}
      id={theSmurf.id}
      age={theSmurf.age}
      height={theSmurf.height}
      key={theSmurf.id}
      deleteSmurf={props.deleteSmurf}
    />
  );
};

export default SingleSmurf;
