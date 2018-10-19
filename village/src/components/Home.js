import React, { Fragment } from 'react';
import smurfs from '../smurfs.jpg';

import '../App.css';

function Home() {
  return (
    <Fragment>
      <div className="welcome">Welcome to the Village!</div>
      <img src={smurfs} alt="smurfs" />
    </Fragment>
  );
}

export default Home;
