import React from 'react';

const Smurf = props => {
  console.log("smurfprops", props)
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={props.function(props.key)}>delete</button>
    </div>
  );
};

export default Smurf;
