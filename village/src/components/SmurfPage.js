import React from 'react';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

const SmurfPage = (props) => {
  return (
    <div>
      <SmurfForm updateState={props.updateState}/>
      <Smurfs smurfs={props.smurfs}/>
    </div>
  );
};

export default SmurfPage;