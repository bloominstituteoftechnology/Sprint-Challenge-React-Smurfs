import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="first-line">
        <img
          onClick={event => {
            props.deleteSmurf(event, props.id);
          }}
          className="delX"
          src="./images/Red_x.png"
          alt="Delete"
        />
        <h3>{props.name}</h3>
      </div>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

