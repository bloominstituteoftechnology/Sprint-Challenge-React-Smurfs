import React from 'react';

const Smurfs = props => {

    return (
      

          <div className="Smurf">
            <h3>{props.data.name}</h3>
            <strong>{props.data.height}</strong>
            <p>{props.data.age}</p>
            <div onClick={()=>{props.deleter(props.data.id)}}>x</div>
          </div>

          
        
      
    );
  }


// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Smurfs;
