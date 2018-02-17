import React from "react";

const Smurf = props => {
  return (
    <div className="indiSmurf">
      {console.log(props)}
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} tall</strong>
      <p>Age: {props.age} old</p>
      <button
        onClick={() => {
          props.badSmurf(props.id);
        }}
      >
        Delete
      </button>
      <button>Update</button>
    </div>
  );
};

export default Smurf;
