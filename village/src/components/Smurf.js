import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h4>{props.name}</h4>
      <h4>{props.height} tall</h4>
      <p>{props.age} smurf years old</p>
      <button onClick={(event) => props.handleDelete(event,props)}>Delete</button>
      <button onClick={() => props.history.push("/smurf-form")}>Update</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

