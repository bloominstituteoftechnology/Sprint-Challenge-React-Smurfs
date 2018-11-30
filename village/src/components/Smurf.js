import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurf-edit/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="delete-button" onClick={props.deleteSmurf}>
        Feed Smurf to the cat <i class="fas fa-cat" />
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
