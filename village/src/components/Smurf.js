import React from "react";

const Smurf = props => {
  return (
    <div className="Smurfs__Smurf">
      <h3 className="Smurfs__name">{props.name}</h3>
      <strong className="Smurfs__height">{props.height} tall</strong>
      <p className="Smurfs__age">{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
