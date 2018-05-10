import React from 'react';
import { Link } from 'react-router-dom'

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
        <Link to="/" className="btn btn-secondary" onClick={props.onSubmit} type="submit">Add to the village</Link>
      </form>
    </div>
  );
}

export default SmurfForm;
