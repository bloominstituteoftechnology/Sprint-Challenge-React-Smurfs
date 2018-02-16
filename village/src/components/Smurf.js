import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      {/* {props.deleted === true && 
                <div className="nuked">
                <div>SMURF NUKED</div>
                <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      </div>} */}
    </div>

  );
}

export default Smurf;