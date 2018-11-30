import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card" onClick={() => {
        if(props.edit){
          console.log('your already here!')
        }else{
          props.updateStart(props.smurf); 
          props.history.push(`/smurf-form/${props.smurf.id}`)
        }
      }}> 
        <h3>{props.smurf.name}</h3>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
      </div>
      {!props.edit && <button onClick={()=>props.deleteItem(props.smurf.id)}>delete</button>}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

