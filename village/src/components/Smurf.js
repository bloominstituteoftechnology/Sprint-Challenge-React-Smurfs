import React from 'react';

const Smurf = props => {
  return (
    //will not have to change Ill pass the data into this component
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
