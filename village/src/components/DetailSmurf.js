import React from 'react';

const DetailSmurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
      <button onClick={() => props.selectSmurf({name: props.name, height: props.height, age: props.age, id: props.id})}>Details</button>
    </div>
  );
};

DetailSmurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default DetailSmurf;