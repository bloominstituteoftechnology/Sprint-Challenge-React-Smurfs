import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
  return(
    <div className="home-menu">
      <div className="text-box">
        <h2>Welcome to Smurf Village!</h2>
        <span>Please Come in!</span>
        <Link to="/smurfs">Enter Smurf Village...</Link>
      </div>
    </div>
  )
}

export default Home;
