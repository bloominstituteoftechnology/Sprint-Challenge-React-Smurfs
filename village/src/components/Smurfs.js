import React from 'react';
import { NavLink } from 'react-router-dom';

import './Smurfs.css';

import Smurf from './Smurf';

const Smurfs = props => {
  const smurfs = props.smurfs;
  const isEditingVillage = props.isEditingVillage;
  const isEditingSmurf = props.isEditingSmurf;

  const editSmurf = id => {
    // console.log(id);
    props.editSmurf(id);
  };
  // console.log(props);
  // console.log(props);
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>

      {isEditingVillage ? (
        <button onClick={props.editVillageFinish}>done</button>
      ) : (
        <button onClick={props.editVillage}>edit</button>
      )}

      <ul className="SmurfsGrid">
        {smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              {isEditingVillage ? (
                <div className="SmurfGrid__smurf">
                  {isEditingSmurf ? (
                    <button
                      className="EditButton"
                      onClick={() => props.cancelEditSmurf()}
                    >
                      cancel
                    </button>
                  ) : (
                    <button
                      className="EditButton"
                      onClick={() => props.editSmurf(smurf.id)}
                    >
                      edit
                    </button>
                  )}
                  <button
                    className="DeleteButton"
                    onClick={() => props.delete(smurf.id)}
                  >
                    delete
                  </button>
                  <Smurf
                    id={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    editSmurf={editSmurf}
                  />
                </div>
              ) : (
                <NavLink
                  to={`/smurfs/${smurf.id}/${smurf.name}/${smurf.age}/${
                    smurf.height
                  }`}
                  className="SmurfGrid__smurf"
                >
                  <Smurf
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                  />
                </NavLink>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Smurfs;
