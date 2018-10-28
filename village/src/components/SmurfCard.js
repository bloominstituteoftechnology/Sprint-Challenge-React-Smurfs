import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import SmurfStyle from './SmurfStyle';

const SmurfCard = props => {
    console.log(props)
    const id = props.match.params.id;
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === id); 
  return (
    <div className="SmurfCard">
      <SmurfStyle>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      </SmurfStyle>
    </div>
  );
};



export default SmurfCard;

