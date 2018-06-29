import React from 'react';
import axios from 'axios';
import Button from './elements/Button';

const DeleteSmurf = ({ id, updateSmurfs }) => {
  const deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(() => {
      updateSmurfs();
    });
  };
  return (
    <div>
      <Button
        onClick={() => {
          deleteSmurf(id);
        }}
      >
        Delete Smurf
      </Button>
    </div>
  );
};

export default DeleteSmurf;
