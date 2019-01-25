import React from 'react';

const Smurf = props => {
  if(props.name!==undefined || props.smurfs.length !== 0){
    const name = (props.name ? props.name : props.smurfs[props.match.params.id].name)
    const height = (props.height ? props.height : props.smurfs[props.match.params.id].height)
    const age = (props.age ? props.age : props.smurfs[props.match.params.id].age)
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
    </div>
  );

  } else {
    return (
      <div className="Smurf">
        Data Loading...
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

