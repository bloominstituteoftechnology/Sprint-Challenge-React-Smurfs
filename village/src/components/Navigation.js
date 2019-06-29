import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="Smurf">
      <div className="App">
        <h1>Welcome to the World of Smurfs</h1>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/smurfs">Smurfs</Link>
        </div>
        <div>
          <Link to="/bad-guys">Bad Guys</Link>
        </div>
      </div>
    </div>
  );
};



export default Navigation;