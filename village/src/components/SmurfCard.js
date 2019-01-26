import React from "react";

const SmurfCard = props => {
  console.log(props.smurf);
  const { name, age, height } = props.smurf;
  return (
    <div className="Smurfs__Smurf">
      <h3 className="Smurfs__name">{name}</h3>
      <strong className="Smurfs__height">{height} tall</strong>
      <p className="Smurfs__age">{age} smurf years old</p>
    </div>
  );
};

export default SmurfCard;
