import React from 'react';
import axios from 'axios';

const DeleteSmurf = ({ id, updateSmurfs }) => {
  const deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(() => {
      updateSmurfs();
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          deleteSmurf(id);
        }}
      >
        Delete Smurf
      </button>
    </div>
  );
};

export default DeleteSmurf;
