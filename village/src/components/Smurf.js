import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <React.Fragment>
      <Link to={`/smurf/${props.id}`} className="link-container">
        <div className="smurf">
          <h3>{props.name}</h3>
          <p>{props.height} tall</p>
          <p>{props.age} smurf years old</p>
        </div>
      </Link>
    </React.Fragment>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
