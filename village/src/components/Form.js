import React from 'react';
import '../App.css';

const Form = props => {
  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={props.handleInputChange}

        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={props.height}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleSmurfSubmit}>Submit</button>
        <button onClick={props.handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default Form;
