import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  const handleDelete = id => {
    props.handleDelete(id);
  };
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <form>
                  <input type="text" placeholder="Edit Name" name="name" onChange={props.formChange} />
                  <input type="number" placeholder="Edit Age" name="age" onChange={props.formChange} />
                  <input type="text" placeholder="Edit Height" name="height" onChange={props.formChange} />
                  <button onClick={() => props.formSubmit(smurf.id)}>Update Smurf</button>
                </form>
                <button onClick={() => handleDelete(smurf.id)}>Delete Smurf</button>
              </div>
            );
          })}
        </ul>
      </div>
    ); 
}

export default Smurfs;
