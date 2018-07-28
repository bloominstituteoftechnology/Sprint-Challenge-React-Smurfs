import React from 'react';
import {Link} from 'react-router-dom'; 

const Smurf = props => {
  return (
	 <div > 
	 <Link to={`/smurfs/${props.id}`}> 
    <div className="Smurf">	  
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
</Link>
</div>	  
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

