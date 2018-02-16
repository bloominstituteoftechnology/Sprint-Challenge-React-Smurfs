import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: this.props.smurfs,
  }

  render() {
    console.log("On smurfs component: ", this.state.smurfs)
     return (
       <div className="Smurfs">
         <h1>Smurf Village</h1>
         <ul>
           { this.state.smurfs.map((smurf) => {
             return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
           })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;