import React from "react";

const SmurfCard = props => {
  const smurf = props.smurfs.find(
    smurf => smurf.id.toString() === props.match.params.id
  );
  return (
    <div className="smurf-card">
      <div className="smurf-card-info">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>
      <div className="btns-div">
        <button>Update</button>
        <button
          onClick={() => {
            props.deleteSmurf(props.match.params.id);
            props.history.push("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SmurfCard;
