import React from 'react';
import SmurfForm from './SmurfForm.js';

const EditSmurf = props => {
  let theSmurf = props.smurfs.find(sm => {
    return sm.id === Number(props.match.params.id);
  });

  return (
    <SmurfForm
      {...props}
      name={theSmurf.name}
      id={theSmurf.id}
      age={theSmurf.age}
      height={theSmurf.height}
      key={theSmurf.id}
      updateState={props.updateState}
    />
  );
};

export default EditSmurf;
