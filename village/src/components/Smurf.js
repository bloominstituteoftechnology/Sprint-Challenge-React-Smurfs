import React from 'react';
import { Link } from 'react-router-dom'

const Smurf = props => {
  // console.log("smurfprops", props)
  return (
    <div className="Smurf">
      {props.smurfs.map(e => {
        return (
          <div className="card" key={e.id}>
            <h3>{e.name}</h3>
            <strong>{e.height} tall</strong>
            <p>{e.age} smurf years old</p>
            <button className="btn btn-secondary delete" onClick={() => {
              props.function(e.id)
            }}>delete</button>
            <Link to="/" className="btn btn-secondary update" onClick={() => {
              props.function2(e.id)
            }}>Update</Link>
          </div>
        );
      })}

    </div>
  );
};

export default Smurf;
