import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return ( 
  <div className="smurfland">
    <div className="intro">
      <h1>~~~Hey Y'allllllllll~~~</h1>
      <Link className="link" to="/smurfs">
        <div className="villageLink">Journey to the Village</div>
      </Link>
    </div>
  </div>
  )
}
 
export default Header;