import React from 'react';
import './Smurf.css';
import { Link } from 'react-router-dom';

const Smurf = props => {
  // console.log(props.id);
  return (
    <div className='Smurf-container'>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <div>
          <Link to={`/smurf-form/edit/${props.name}`}><button className='smurf-btns'>Edit Smurf</button></Link>
          <button className='smurf-btns' onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
      </div>
      </div>
      
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

