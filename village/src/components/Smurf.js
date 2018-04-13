import React,{Component} from 'react';
import Delete from './delete';
import UpdateSmurf from './updateSmurf'


 const Smurf = props => {
    console.log('f',props);
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <UpdateSmurf getSmurfs={props.getSmurfs} id={props.id} smurf={props.smurf}/>
      <Delete getSmurfs={props.getSmurfs} id={props.id}/>
    </div>
  );
};

export default Smurf;
