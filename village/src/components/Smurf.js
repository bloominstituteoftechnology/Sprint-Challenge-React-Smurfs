import React from 'react';

const Smurf = props => {

  this.deleteSmurf = (e, id) => {
    id = props.id
    e.preventDefault();
    props.deleteSmurf(id);
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={this.deleteSmurf}> Delete Smurf </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
