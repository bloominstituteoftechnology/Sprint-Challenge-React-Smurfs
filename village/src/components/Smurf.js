import React from 'react';
import { NavLink } from 'react-router-dom';


const Smurf = props => {
  console.log('props....in smurf', props)
  return (
    <div>
      <div className="Smurf">
        {
          `${props.id} -- ${props.name} ${props.height} ${props.age} `
        }
      </div>
      {/* <NavLink to={`/smurfs/${props.id}`}><button onClick={event => props.handleViewSmurf(event, props.id)}>View</button></NavLink> */}
      <button onClick={event => props.handleDeleteSmurf(event, props.id)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

