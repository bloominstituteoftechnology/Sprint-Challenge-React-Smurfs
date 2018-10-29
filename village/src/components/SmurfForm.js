import React, { Component } from "react";



class SmurfForm extends Component {
  constructor(props) {
    super(props);
  }

handleClick = (ev) => {
    ev.preventDefault();
    if (this.props.isEditing) {
      this.props.editNote();
    } else {
      this.props.addSmurf();
    }
  }

  render() {


    return (
      <div>
        <form onSubmit={(ev) => {this.handleClick(ev); this.props.history.push('/village')}} className="smurfForm">
          <h1>New Smurf!</h1>
          <div className="titleBorder" />
          <input
            onChange={this.props.handleInputChange}
            placeholder="title"
            value={this.props.note.title}
            name="title"
            type="text"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="textBody"
            value={this.props.note.textBody}
            name="textBody"
            type="text"
          />
          <button type="submit" className="submitButton">
         {this.props.isEditing ? 'Edit Note' : 'Add Note'}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
