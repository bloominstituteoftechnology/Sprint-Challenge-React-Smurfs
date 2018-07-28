import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="App">
        <div>
          <Link to="/"><i class="fas fa-home fa-lg"></i></Link>
        </div>
        <div>
          <Link to="/smurfs"><i class="far fa-user fa-lg"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
