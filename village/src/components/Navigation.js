import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/smurfs">Smurfs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
