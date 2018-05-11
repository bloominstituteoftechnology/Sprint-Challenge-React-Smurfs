import React from 'react';

const SmurfCard = props => {
  return (
    <div className="SmurfCard">
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
    </div>
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;

