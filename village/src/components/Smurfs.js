import React from 'react';
import { Link } from 'react-router-dom';

const Smurfs = props => {
  console.log(props, "list");
  return (
    <div className="smurf-list">
      <h3>Smurf List View</h3>
      <ul >
        {props.smurfs.map(smurf => {
          return (
            <li key={smurf.id}>
              <Link
                to={{
                  pathname: `/village/${smurf.id}`,
                  state: {
                    id: smurf.id,
                    name: smurf.name,
                    height: smurf.height,
                    age: smurf.age
                  }
                }}
              >
                {smurf.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Smurfs;