import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Smurf = props => {
  
  const deleteSmurf = (id) => {
    axios 
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {props.updateInfo()})
      .catch(err => console.log(err))
  }
  
  return (
    <div className="Smurf">
      {/* <Link to={`/smurfs/${props.match.params.id}`}>{props.name}</Link> */}
      <Link to={"/"}><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button style={deleteBtn} onClick={() => {deleteSmurf(props.id)}}>delete</button>
    </div>
  );
};

const deleteBtn = {
  fontSize: "20px",
  borderRadius: "10px",
  backgroundColor: "purple",
  color: "white",
  height: "30px",
  width: "100px",
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

