import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={props.delete} data-id={props.id}>Delete</button> {/*Delete button on each smurf that has a data attribute equal to the id of the smurf, when button is clicked it runs delete function passed to it*/}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

