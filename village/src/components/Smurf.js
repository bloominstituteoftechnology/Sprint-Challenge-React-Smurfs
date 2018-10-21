import React from 'react';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3> {props.height} tall and {props.age} smurf years old
      <button onClick={event=>props.handleDeleteSmurf(event,props.id)}>Delete Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

