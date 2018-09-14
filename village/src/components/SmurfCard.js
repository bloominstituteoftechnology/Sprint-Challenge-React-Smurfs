import React from 'react';
import { Link } from 'react-router-dom';

function SmurfCard(props) {
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(props.match.params.smurfId, 10));
  function handleDelete() {
    props.handleDeleteSmurf(smurf.id);
    props.history.push('/');
  }
  return (
    <div className="smurf-card">
    <h3>{smurf.name}</h3>
    <strong>{smurf.height} tall</strong>
    <p>{smurf.age} smurf years old</p>
    <button onClick={handleDelete}>Exile Smurf</button>
    </div>

)}

export default SmurfCard;
