import React from 'react';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';

const SmurfView = (props) => {
  let smurf;
  for (let i = 0; i < props.smurfs.length; i++) {
    //Had to use loosey-goosey comparison for this to work
    //I think the one in smurfs is a number and the one in match is a string
    if (props.smurfs[i].id == props.match.params.id) {
      smurf = props.smurfs[i]
      i = props.smurfs.length;
    }
  }
  return (
    <div>
    <Smurf
      name={smurf.name}
      id={smurf.id}
      age={smurf.age}
      height={smurf.height}
      key={smurf.id}
      handleSmurfDelete={props.handleSmurfDelete}
    />
    </div>
  )
}

export default SmurfView;
