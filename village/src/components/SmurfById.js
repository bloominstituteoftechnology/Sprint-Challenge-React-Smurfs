import React from "react";

const SmurfById = props => {
  const {id} = props.match.params;
  const smurf = props.smurfs.find(smurf => `${smurf.id}` === `${id}`);
  console.log(smurf);
  return (
    <div className="Smurf" style={{margin: `40px auto`}}>
      <h2>{smurf.name}</h2>
    </div>
  );
};

export default SmurfById;
