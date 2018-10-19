import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        onClick={event => {
          props.DeleteSmurf(event, props.id);
        }}
      >
        Delete this Smurf
      </button>
      <form
        onSubmit={event => {
          props.ChangeSmurfAge(event, props.id);
        }}
      >
        <input type="text" placeholder="New Age:" value="undefined" />
        <button
          onSubmit={event => {
            props.ChangeSmurfAge(event, props.id);
          }}
        >
          Change Age
        </button>
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
