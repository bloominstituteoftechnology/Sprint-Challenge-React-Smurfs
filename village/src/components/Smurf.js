import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={(event) => props.handleDelete(event,props.id)}>Delete</button>
      <button onClick={() => props.history.push("/smurf-form")}>Update</button>
      {/* <button onClick={() => props.handleChange(event, id)}>Update</button> */}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

