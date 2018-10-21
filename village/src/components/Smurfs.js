import React, { Component } from "react";
import Smurf from "./Smurf";
import UpdateSmurfForm from "./UpdateSmurfForm";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatingSmurfId: null  // this is to determine if a user clicked "edit" button
    };

    this.smurfs = [];
    this.updateSmurf = this.updateSmurf.bind(this);
  }

  // this method is to provide the id of smurf that will be edited
  updateSmurf = id => {
    this.setState({ updatingSmurfId: id });
  };

  render() {
    //  if the URL has specific id, set smurfs as matching id smurf
    // otherwise set smurfs as all smurfs and display all

// below if is to determine if URL has id in URL.  if so, only matching smurf is assigned to this.smurfs.  
// if not all smurf  will be assigned to this.smurfs and be displayed
    if (this.props.match.params.id) {
      this.smurfs = this.props.smurfs.filter(
        smurf => smurf.id == this.props.match.params.id
      );
    } else {
      this.smurfs = this.props.smurfs;
    }

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="smurfList">
          {this.smurfs.map(smurf => {
            // check if a smurf is updating.  if so, display update form
            // if not, display normal view of smurf info.
            if (this.state.updatingSmurfId !== smurf.id) {
              return (
                <Smurf
                  smurf={smurf}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                  updateSmurf={this.updateSmurf}
                />
              );
            } // end of if
            else {
              return (
                <UpdateSmurfForm
                  submitUpdate={this.props.submitUpdate}
                  updateSmurf={smurf}
                  key={smurf.id}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
