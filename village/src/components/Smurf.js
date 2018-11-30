import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card" onClick={() => {
        props.updateStart(props.smurf);
        props.history.push('/smurf-form')
      }}>
        <h3>{props.smurf.name}</h3>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
      </div>
      <button onClick={()=>props.deleteItem(props.smurf.id)}>delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

