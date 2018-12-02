import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

const SmurfCard = props => {
  console.log('props from smurfcard', props)
  // const myRegex = parseInt(props.location.pathname.match(/\d+$/)[0], 10);
  const myRegex = props.match.params.id
  return (
    <div>
      {props.smurfs[myRegex].name}
      {props.smurfs[myRegex].height}
    </div>
  );
};

export default SmurfCard;
