import React from "react";

const SmurfForm = props => {
  return (
    <div className="Village-page">
      <div className="SmurfForm">
        <form onSubmit={props.handleAddSmurf}>
          <input
            onChange={props.handleInputChange}
            placeholder="name"
            value={props.value.name}
            name="name"
            type="text"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="height"
            value={props.value.height}
            name="height"
            type="Number"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="age"
            value={props.value.age}
            name="age"
            type="Number"
          />
          <button onClick={props.handleAddSmurf}>Add to the village</button>
        </form>
      </div>
    </div>
  );
};

export default SmurfForm;
