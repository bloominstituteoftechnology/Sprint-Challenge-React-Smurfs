import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import SmurfStyle from './SmurfStyle';

const Smurf = props => {
  return (
    <div className="Smurf">
      <SmurfStyle>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      </SmurfStyle>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

