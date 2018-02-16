import React, { Component } from 'react';

function SmurfForm (props) {

    return (
      <div className="SmurfForm">
        <form onSubmit={props.addSmurf}>
          <input
            onChange={props.handleInput}
            name='name'
            placeholder="name"
            value={props.name}
          />
          <input
            onChange={props.handleInput}
            name='age'
            placeholder="age"
            value={props.age}
          />
          <input
            onChange={props.handleInput}
            name='height'
            placeholder="height"
            value={props.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );

}

export default SmurfForm;