import React from 'react';

const SmurfCard = (props) => {
  return (
    <div className="SmurfCard">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default SmurfCard;