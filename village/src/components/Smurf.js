import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  console.log(props.id);
  return (
    <Link to={`/smurfList/${props.id}`} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} feet tall</strong>
      <p>{props.age} smurf years old</p>
    </Link>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
