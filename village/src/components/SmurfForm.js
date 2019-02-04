import React from 'react';

function SmurfForm(props) {
    return (
      <div className="SmurfForm">
        <form onSubmit={props.addSmurf}>
          <input
            onChange={props.handleInputChange}
            placeholder="name"
            value={props.name}
            name="name"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="age"
            value={props.age}
            name="age"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="height"
            value={props.height}
            name="height"
          />
          <button type="submit" onClick={props.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
}

export default SmurfForm;
