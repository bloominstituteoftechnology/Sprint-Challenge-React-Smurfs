import React from 'react';

const Smurf = props => {
  const deleteASmurf = (id) => {
    props.deleteASmurf(id);
  }
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => deleteASmurf(props.id)}>Delete {props.name}</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

