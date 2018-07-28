import React from "react";
import DeleteSmurf from "./DeleteSmurf";

const Smurf = props => {
  return (
    <div className="container">
      <div className="smurf-margin-top">
        <div className="Smurf card">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <DeleteSmurf smurfId={props.id} />
        </div>
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
