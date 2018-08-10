import React from 'react';
import { Link } from 'react-router-dom';

const Destroyed = props => {
  return (
    <div className='burned-village'>
      <h1>Gargamel has Destroyed the Smurf Village! All smurfs are gone now...</h1>
      <Link to='/'><button>Return home</button></Link>
    </div>
  );
}

export default Destroyed;
