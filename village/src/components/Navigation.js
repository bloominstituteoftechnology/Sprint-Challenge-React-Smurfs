import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div>
        <Link to="/">Smurf List</Link>
        </div>
        <div>
          <Link to="/smurf-form">Smurf Form</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
