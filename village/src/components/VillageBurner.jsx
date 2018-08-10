import React, { Component } from 'react';
import axios from "axios";

class VillageBurner extends Component {
  burnTheVillage=()=>{
    axios
    .delete(`http://127.0.0.1:3333/smurfs/`)
    .then(response => {
      this.props.updateParentState(response.data);
     

    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.burnTheVillage}> BURNINATE </button>
      </div>
    );
  }
}

export default VillageBurner;