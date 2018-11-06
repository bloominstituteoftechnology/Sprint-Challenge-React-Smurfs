import React from 'react';



const Smurf = props => {
const {id, name, height, age} = props

return(
 <div>
 <h1>{name}</h1>
 <h3>{age}</h3>
  <h4>{height}</h4>
 </div>
)
};
 
Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

