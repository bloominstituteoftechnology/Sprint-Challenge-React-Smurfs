import React from 'react';

const Smurf = props => {
  return (
    <div id={props.id} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>

      <form
        onSubmit={() => {
          props.deleteSmurf(props.id);
        }}
      >
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Smurf;
