import React from 'react';

const Smurf = props => {

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.handleRemoveSmurf(props.id)}>^Remove^</button>
      <form className='editSmurf' onSubmit={props.handleEditSmurf(props.id)}>
        <input
          onChange={props.handleInputChange}
          placeholder="name"
          value={props.state.name}
          name="name"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="age"
          value={props.state.age}
          name="age"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="height"
          value={props.state.height}
          name="height"
        />
        <button type="submit">^Edit Smurf^</button>
      </form>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;