import React from 'react';
// import axios from 'axios';


const deleteItem = event => {
  console.log("Item deleted");
  // axios
  //   .delete("http://localhost:3333/smurfs/${props.id}")
  //   .then(response => (response.data) )
  //   .catch(error => console.log(error))

}

const Smurf = props => {
  return (
    <div className="smurf">
      {console.log(props)}
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span className="delete" onClick={deleteItem}>Delete Smurf</span>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

