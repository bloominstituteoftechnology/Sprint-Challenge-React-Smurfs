import React from 'react';
import { Link } from 'react-router-dom';
import "./Smurf.css";


const Smurf = props => {
  console.log("SmurfDetail props", props);
  return (
    <div className="smurf-list">
      <h3>ID: {props.match.params.id}</h3>
      <div>
        NAME: {props.location.state.name}
        <br />
        AGE: {props.location.state.age}
        <br />
        HEIGHT: {props.location.state.height}
        <br />
      </div>
      <ul>
        <li>
          <Link to="/village"> Back to the Village</Link>
        </li>
      </ul>
    </div>
  );
};

export default Smurf;
