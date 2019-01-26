import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  
  return (
    <div className="Smurf">
      <div>

        <Link to={{
        pathname: "/smurf-form-edit",
        search: "",
        hash: "",
        state: { 
          id:props.id,
          name:props.name,
          height:props.height,
          age:props.age
        } 
      }}>EDIT</Link>

        <p  onClick={()=>{
          props.deleteASmurf(props.id)
        }}>X</p>
      </div>
      <Link to={{
        pathname: `/smurf/${props.id}`,
        search: "",
        hash: "",
        state: { smurf:[{
          id:props.id,
          name:props.name,
          height:props.height,
          age:props.age
        }]
        } 
      }}><h3>{props.name}</h3></Link>
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

