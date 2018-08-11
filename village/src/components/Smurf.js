import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  const { name, age, height, id } = props.smurf;
  return (
    <div>
      <Link to={`/smurfs/${id}`} className="smurf">
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </Link>
      <div className="smurf-controls">
        <button onClick={props.update}>Update</button>
        <button onClick={props.delete}>Delete</button>
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
