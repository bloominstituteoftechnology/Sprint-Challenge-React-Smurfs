import React from 'react';
import './Smurf.css';


const Smurf = props => {
  // function Item({ item, deleteItem, history, updateItem }) {
  //   const smurf = props.smurfs.find(
  //     thing => `${thing.id}` === props.match.params.id
  //   );
  
  //   if (!item) {
  //     return <h2>Loading smurf data...</h2>;
  //   }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
      className = "smurf-button"
        // onClick={event => {
        //   updateItem(event, smurf);
        //   history.push('/smurf-form');
        // }}
        // className="smurf-button"
      >
        Update Smurf
      </button>
      <button
      className = "smurf-button"
        // onClick={event => {
        //   deleteItem(event, smurf.id);
        //   history.push('/smurfs');
        // }}
        // className="smurf-button"
      >
        Goodbye Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

