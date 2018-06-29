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
            <label className="label is-pulled-left" htmlFor = 'update-name'>Name</label>
            <div className="control">
              <input className="input" name = "updateName" onChange = {e => {
                
                props.handleInputChange(e)}} id = 'update-name' type="text" placeholder="Insert Name" value = {props.updateName} />
            </div>
          </div>
          {/* Age */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'update-age'>Age</label>
            <div className="control">
              <input className="input" name='updateAge' onChange = {e => {
                
                props.handleInputChange(e)}} id = 'update-age' type="text" placeholder="Insert Age" value = {props.updateAge} />
            </div>
          </div>
          {/* Height */}
          <div className="field">
            <label className="label is-pulled-left" htmlFor = 'update-height'>Height</label>
            <div className="control">
              <input className="input" name = 'updateHeight' onChange = {e => {
                
                props.handleInputChange(e)}} id = 'update-height' type="text" placeholder="Insert Height" value = {props.updateHeight} />
            </div>
          </div>
          
        </section>
        
        <footer className="modal-card-foot">
          <button className="button is-success" onClick = {() => {
            props.hideUpdateModalHandler();
            props.updateSmurfHandler(props.updateId);
            }}>Save changes</button>
          <button className="button" onClick = {props.hideUpdateModalHandler}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default UpdateModal;
