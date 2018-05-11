import React from 'react';

const Smurf = props => {
  console.log("Smurf props:", props)
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={()=>this.removeSmurf(props.id)}>Remove {props.name} from the list</button>
      <button onClick={()=>this.updateSmurf(props.id)}>Remove {props.name} from the list</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

