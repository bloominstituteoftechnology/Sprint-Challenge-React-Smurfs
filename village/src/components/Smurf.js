import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
    <form onSubmit={props.update} id={props.id} >
      <input type = 'text' name = 'name' defaultValue={props.name}></input>
      <input type = 'text' name = 'height'  defaultValue={`${props.height} tall`}></input>
      <input type = 'text' name = 'age' defaultValue={`${props.age} smurf years old`}></input>
      <button onClick={props.delete} id={props.id}>Delete</button>
      </form>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

