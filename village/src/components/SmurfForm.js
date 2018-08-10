import React from "react";

const SmurfForm = props => {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleName}
          placeholder="name"
          value={props.name}
          name="name"
        />
        <input
          onChange={props.handleAge}
          placeholder="age"
          value={props.age}
          name="age"
        />
        <input
          onChange={props.handleHeight}
          placeholder="height"
          value={props.height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
