import React from "react";


const Smurf = props => {
  console.log('props')
  const {id,name, height, age} = props
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(id)}>delete</button>
      <button>update</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
