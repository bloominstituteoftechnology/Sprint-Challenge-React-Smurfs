import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  console.log(props);
  return (
    <div className="Smurf">
      <button onClick={() => props.deleteSmurf(props.id)}>x</button>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link
        to="/smurf-form"
        onclick={() => props.editSmurf(props.id)}
        edit={true}
      >
        <button>Edit Info</button>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
