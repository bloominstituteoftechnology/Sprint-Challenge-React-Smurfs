import React, { Fragment } from 'react';
import smurf from './smurf.jpg';
import '../App.css';

const Home = () => {
  return(
    <Fragment>
      <div className='home'>Welcome to the Smurf Village!</div>
      <img src={smurf} alt="Smurf"/>
    </Fragment>
  )
}

export default Home;