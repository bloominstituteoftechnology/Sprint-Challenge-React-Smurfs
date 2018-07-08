import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SmurfList = props => {
  const smurfs = props.smurfs.slice().reverse();
  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <Link to={`/smurfs/${smurf.id}`} key={Math.random()}>
            {smurf.name}
          </Link>
        );
      })}
    </div>
  );
}

SmurfList.defaultProps = {
  smurfs: [],
};

export default SmurfList;
