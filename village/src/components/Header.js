import React from 'react';
import { Link,  } from "react-router-dom";

const Header = () => {
  return( 
    <div>
  <h2>You are a welcomed guest in the smurf village.</h2>
  {/* <Link className="village-button" to={"/"}>
  <button>Home</button></Link> */}
  <Link className="village-button" to={"/smurfs"}>
  <button>Village Entrance</button></Link>
  </div>
  );
}
 
export default Header;