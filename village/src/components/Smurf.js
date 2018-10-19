import React from 'react';

const Smurf = props => {
  const { id, name, age, height} = props
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button onClick={()=>props.deleteSmurf({id: id})}>Delete {name}</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

