import React from 'react';
import{Link} from 'react-router-dom';
const Header = () => {
  return (
  <div>
    <h2>Welcome to the Smurfs Village!</h2>
    <Link to='/'>Village Entrance</Link><br/>
    <Link to='/smurfs'>Look What We Got in ourSmurfs Village!</Link>
  </div>
  )
};
 
export default Header;