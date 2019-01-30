import React from 'react';

const SmurfForm = props => {
  console.log(props, "form");
    return (
      <div className="SmurfForm">
        <form className="smurf-form" onSubmit={props.addSmurf}>
        <div>
            <input
              onChange={props.handleChange}
              placeholder="name"
              value={props.name}
              name="name"
            />
            <input
              onChange={props.handleChange}
              placeholder="age"
              value={props.age}
              name="age"
            />
            <input
              onChange={props.handleChange}
              placeholder="height"
              value={props.height}
              name="height"
            />
          </div>
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }


export default SmurfForm;