import React from 'react';

const SmurfForm = props => {
  return ( // On all input changes update state in App components state
    <div className="SmurfForm">
        <input
          onChange={props.handleInputChange}
          placeholder="name"
          value={props.formText.name}
          name="name"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="age"
          value={props.formText.age}
          name="age"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="height"
          value={props.formText.height}
          name="height"
        />
        <button onClick={props.addSmurf}>Add to the village</button>
        {/* Provide text hint for proper use --- Work on making intuitive */}
        <p className="instruction-info">- To update Smurf please enter info 
          into the form and hit update on the Smurfs card -</p>
    </div>
  );
}


export default SmurfForm;
