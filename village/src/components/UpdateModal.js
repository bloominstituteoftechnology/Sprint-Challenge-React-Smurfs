import React from "react";
import bulma from "bulma/css/bulma.css";
const UpdateModal = props => {
  return (
    <div className={`modal ${props.isUpdateActive ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Update Smurf</p>
          <button className="delete" onClick = {props.hideUpdateModalHandler} aria-label="close" />
        </header>
        <section className="modal-card-body">
            {/* Name */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'name'>Name</label>
            <div className="control">
              <input className="input" id = 'name' type="text" placeholder="Insert Name" />
            </div>
          </div>
          {/* Age */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'age'>Age</label>
            <div className="control">
              <input className="input" id = 'age' type="text" placeholder="Insert Age" />
            </div>
          </div>
          {/* Height */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'height'>Height</label>
            <div className="control">
              <input className="input" id = 'height' type="text" placeholder="Insert Height" />
            </div>
          </div>
          
        </section>
        
        <footer className="modal-card-foot">
          <button className="button is-success" onClick = {props.hideUpdateModalHandler}>Save changes</button>
          <button className="button" onClick = {props.hideUpdateModalHandler}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default UpdateModal;
