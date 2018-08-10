import React from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { Link } from 'react-router-dom';

const Smurfs= props=> {
  console.log(props);
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <SmurfForm />
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <div className="SmurfCard" key={smurf.id}>
              <h3>{smurf.name}</h3>
              <strong>{smurf.height} tall</strong>
              <p>{smurf.age} smurf years old</p>
              <Link to={`/smurfs/${smurf.id}`}><button>more</button></Link>
              <button onClick={()=>props.remove(smurf.id)}>Poof!</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
