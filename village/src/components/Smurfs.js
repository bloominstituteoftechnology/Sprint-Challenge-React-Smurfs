import React, { Component } from "react";
import SmurfForm from './SmurfForm';
import Smurf from "./Smurf";
import SmurfNav from './SmurfNav';

const Smurfs = props => {
  return (
    <div className="Smurfs">
     <SmurfNav />
      <SmurfForm />
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <Smurf smurf={smurf} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
