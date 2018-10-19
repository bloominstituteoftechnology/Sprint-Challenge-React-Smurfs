import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>
        <i
          className="fas fa-edit"
          onClick={() => {
            props.toggleUpdate(props.smurf);
            props.history.push("/smurf-form");
          }}
        />
        {props.name}
        <i
          className="fas fa-trash-alt"
          onClick={() => props.deleteSmurf(props.id)}
        />
      </h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
