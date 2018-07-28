import React from 'react';

const Header = props => {
  return (
    <div>
      <h2>Welcome to Smurf Village.</h2>
      <span>If you would like to meet the rest of the residents here ate Smurf Village, please click the button below.</span>
      <button onClick={props.linkToVillage}>Enter Smurf Village</button>
    </div>
  );
}
 
export default Header;