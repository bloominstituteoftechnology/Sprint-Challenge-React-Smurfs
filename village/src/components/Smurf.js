import React from 'react';
const sstyle = {
  border: '2px solid blue'
}
const Smurf = props => {
  return (
    <div className="Smurf" style={sstyle}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={props.editSmurf()}>Edit Smurf</button> */}

      {/* {props.editSmurf()} */}
    </div>
  );
};

export default Smurf;
