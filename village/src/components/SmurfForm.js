import React, { Component } from 'react';

const SmurfForm = props => {
  const hdlsbmt = (event) => {
    event.preventDefault();
    if (props.sltupdt) {
      props.updtsmf(props.smf.id);
    } else {
      props.adsmf();
    }
  }
    return (
      <div className="SmurfForm">
        <form onSubmit={hdlsbmt}>
          <input
            onChange={props.handleChange}
            placeholder="name"
            value={props.smf.name}
            name="name"
          />
          <input
            onChange={props.handleChange}
            placeholder="age"
            value={props.smf.age}
            name="age"
          />
          <input
            onChange={props.handleChange}
            placeholder="height"
            value={props.smf.height}
            name="height"
          />
          <button type="submit">{props.sltupdt ? "Bring on the change!" : "Add to the village"}</button>
        </form>
      </div>
    );
}

export default SmurfForm;
