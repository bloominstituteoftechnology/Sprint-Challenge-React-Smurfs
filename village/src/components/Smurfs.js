import React from 'react';
import { Link } from 'react-router-dom';
import SmurfForm from './SmurfForm';

const Smurfs = props => {
  console.log(props, "list");
  return (
    <div className="smurf-list">
      <SmurfForm addSmurf={props.addSmurf} handleChange={props.handleInputChange}/>
      <h3>Smurf List View</h3>
      <ul >
        {props.smurfs.map(smurf => {
          return (
            <li key={smurf.id + smurf.name}>
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
                { (smurf.name === 'Smurfette') ? 
                <p>{smurf.name} </p> :
                <p>{smurf.name} Smurf</p> 
                }
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">Gargamel is Coming! Flee the Village!</Link>
    </div>
  );
};


export default Smurfs;