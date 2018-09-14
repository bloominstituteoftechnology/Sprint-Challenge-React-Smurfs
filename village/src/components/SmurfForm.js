import React from 'react';
import PropTypes from 'prop-types';

function SmurfForm(props) {
  console.log(props);
  console.log(props.newSmurf.age);

    return (
      <div className="SmurfForm">
        <h2> Add a new smurf! </h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={props.newSmurf.name}
            onChange={props.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={props.newSmurf.age}
            onChange={props.handleAgeChange}
          />
          <input
            type="text"
            name="height"
            placeholder="height"
            value={props.newSmurf.height}
            onChange={props.handleChange}
          />
          <input 
            type="submit"
            value="Submit"
            onClick = {props.addNewSmurf} 
          />
        </form>
      </div>
    );
}

SmurfForm.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.object),
  newSmurf: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string
  }),
  handleChange: PropTypes.func,
  addNewSmurf: PropTypes.func
};

export default SmurfForm;