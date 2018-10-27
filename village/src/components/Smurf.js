import React from 'react';

const Smurf = props => {
    return (
        <div className="Smurf card card-body mb-3">
        <h3>{props.name} <i  className="fas fa-trash" style={{float:'right', cursor:'pointer', color:'blue'}} ></i></h3>
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

