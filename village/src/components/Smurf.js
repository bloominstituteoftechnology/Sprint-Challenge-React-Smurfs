import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <img src={props.imgUrl} alt={props.name} />
      <div className="flexyDiv">
        <h3>{props.name}</h3>
        <p><strong>Smurfey Height:</strong> {props.height} tall</p>
        <p><strong>Smurfey Age:</strong> {props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
