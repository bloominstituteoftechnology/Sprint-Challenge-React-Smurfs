import React from 'react';

const SmurfForm = (props) => {
  return (
    <div className="smurf-form container-fluid">
      <form>
        <input
          onChange={props.onChange}
          className="form-control"
          placeholder="name"
          value={props.name}
          name="name"
          type="name"
        />
        <input
          onChange={props.onChange}
          className="form-control"
          placeholder="age"
          value={props.age}
          name="age"
          type="age"
        />
        <input
          onChange={props.onChange}
          className="form-control"
          placeholder="height"
          value={props.height}
          name="height"
          type="number"
        />
      </form>
    </div>
  );
}

export default SmurfForm;
