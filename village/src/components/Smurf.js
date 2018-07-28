import React from 'react';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';


const Smurf = props => {
  
  const deleteASmurf = (id) => {
    axios.delete(`http://localhost:3000/smurfs/${id}`)
    .then((res) => {props.addSmurf()})
    .catch(err => console.log(err))
  }
  
  return (
    <div className="Smurf">
      
      <Link to={"/"}><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => {deleteASmurf(props.id)}}>delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

