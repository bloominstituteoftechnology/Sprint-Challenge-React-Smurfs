import React from 'react';

const Smurfs = props => {

    return (
      

          <div className="Smurf">
            <h3>{props.data.name}</h3>
            <strong>{props.data.height}</strong>
            <p>{props.data.age}</p>
          </div>

          
        
      
    );
  }


// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Smurfs;
