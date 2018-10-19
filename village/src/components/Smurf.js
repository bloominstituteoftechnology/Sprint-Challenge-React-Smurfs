import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div
        className="delete"
        onClick={e => props.deleteSmurf(e, props.id)}
        href="#"
      >
        Delete
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired
};

export default Smurf;
