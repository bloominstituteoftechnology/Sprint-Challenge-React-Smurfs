import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h2>Hello wanderer, you are a welcome guest to our smurf village.</h2>
      <button onClick={()=>props.history.push('/smurfs')}>Go to Village</button>
    </div>
  )
}
 
export default Header;