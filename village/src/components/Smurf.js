import React from 'react';
import EditForm from './EditSmurf';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={props.toggleEdit}>Edit</button>
      {props.showEdit ? (
        <EditForm id={props.id}/>
      ) : null}
      <button onClick={(e) => props.deleteSmurf(props.id)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

