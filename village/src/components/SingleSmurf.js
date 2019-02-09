import React from "react";

const SingleSmurf = props => {
  const id = props.match.params.id;
  if (props.smurfs.length) {
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === id);
    return (
      <div className="SingleSmurf">
        <div className="Smurf">
          <h3>
            <i
              className="fas fa-edit"
              onClick={() => {
                props.toggleUpdate(smurf);
                props.history.push("/smurf-form");
              }}
            />
            {smurf.name}
            <i
              className="fas fa-trash-alt"
              onClick={() => {
                props.deleteSmurf(smurf.id);
                props.history.push("/");
              }}
            />
          </h3>
          <strong>{smurf.height} tall</strong>
          <p>{smurf.age} smurf years old</p>
        </div>
      </div>
    );
  } else {
    return <h1>Loading Smurf...</h1>;
  }
};

export default SingleSmurf;
