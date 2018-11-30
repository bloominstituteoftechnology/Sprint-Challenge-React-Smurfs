import React from 'react';
import './Smurf.css';
import { Link } from 'react-router-dom';

const Smurf = props => {
  // console.log(props.id);
  return (
    <div className='Smurf-container'>
      {<Link to={`/smurf/${props.id}`}>
        <div className="Smurf">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>

          <div>
            <Link to={`/smurf-form/edit/${props.id}`} >
              <button className='smurf-btns'>Edit Smurf</button>
            </Link>
            <Link to='/'>
              <button className='smurf-btns' onClick={() => {props.deleteSmurf(props.id)}}>
                Delete Smurf
              </button>
            </Link>
          </div>

        </div>
      </Link>}
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

