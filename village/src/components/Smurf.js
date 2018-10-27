import React from 'react';
import axios from 'axios';

const Smurf = props => {

  // removeSmurf(props) {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${props.id}`)
  //     .then(response => {
  //       this.props.deleteFromDB(response.data)
  //     })
  //     .catch(err => console.log(err));
  // }

  const removeSmurf = (e) => {
    console.log('i work')
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(response => {
        props.deleteFromDB(response.data)
      })
      .catch(err => console.log(err));
  }

  return (


    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={removeSmurf}>Bye, Smurf!</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

