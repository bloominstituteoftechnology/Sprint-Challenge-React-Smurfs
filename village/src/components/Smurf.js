import React from "react";

import SmurfEdit from "./SmurfEdit";

const Smurf = props => {
  // console.log(props.getSmurfs); //check what's on props

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height}cm tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>
        Delete this Smurf
      </button>
      <SmurfEdit getSmurfs={props.getSmurfs} id={props.id} />
    </div>
  );
};

export default Smurf;
