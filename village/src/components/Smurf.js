import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf" id={props.id}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="buttons">
        <div className="button delete" onClick={props.deleteSmurf}>
          Delete
        </div>
        <div className="button update">Update</div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
