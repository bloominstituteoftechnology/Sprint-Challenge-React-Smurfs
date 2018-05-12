import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Smurfs from './Smurfs';

const Smurf = (props) => {
    return (
    <div>
      {}
      <h1>Name: <Link to = {`/smurfs/profile/${props.id}`}>{props.name}</Link></h1>
      <h2>Height: {props.height}cm</h2>
      <h3>Age: {props.age} smurf years</h3>
      <Link to='/smurfs'>Back to the Village</Link>
    </div>
    )
  }

  export default Smurf;
