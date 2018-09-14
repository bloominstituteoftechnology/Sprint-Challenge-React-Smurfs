import React from 'react';
import { Link } from 'react-router-dom';

function SmurfCard(props) {
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(props.match.params.smurfId, 10));
  function handleDelete() {
    props.handleDeleteSmurf(smurf.id);
    props.history.push('/');
  }
  function handleUpdate() {
    props.handleUpdateSmurf(smurf.id);
  }
  //goToUpdateSmurfForm = (event, id) => {
  //  event.preventDefault();

//  }
  return (
    <div className="smurf-card">
    <h3>{smurf.name}</h3>
    <strong>{smurf.height} tall</strong>
    <p>{smurf.age} smurf years old</p>
    <button onClick={handleDelete}>Exile Smurf</button>
    <button onClick={handleUpdate}>Update the Census Records...</button>
    </div>

)}

export default SmurfCard;
