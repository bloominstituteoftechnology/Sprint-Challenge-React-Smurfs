import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="delete" onClick={() => props.deleteHandler(props.id)}>✕</div>
      {/* delete handler is passed down from smurfs.js but the main code is app.js. Taking id as an argument here for axios.delete */}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

