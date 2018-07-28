import React from 'react';

const Header = props => {
  return (
    <div>
      <h2>Welcome to the smurf village!</h2>
      <button onClick={() => props.history.push('/smurfs')}>Enter the village!</button>
    </div>
  )
}

export default Header;