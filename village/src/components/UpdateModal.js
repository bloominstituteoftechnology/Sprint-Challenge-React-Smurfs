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
            <label className="label is-pulled-left" htmlFor = 'updateName'>Name</label>
            <div className="control">
              <input className="input" onClick = {props.handleInputChange} id = 'updateName' type="text" placeholder="Insert Name" value = {props.updateName} />
            </div>
          </div>
          {/* Age */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'updateAge'>Age</label>
            <div className="control">
              <input className="input" onClick = {props.handleInputChange} id = 'updateAge' type="text" placeholder="Insert Age" value = {props.updateAge} />
            </div>
          </div>
          {/* Height */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'updateHeight'>Height</label>
            <div className="control">
              <input className="input" onClick = {props.handleInputChange} id = 'updateHeight' type="text" placeholder="Insert Height" value = {props.updateHeight} />
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
