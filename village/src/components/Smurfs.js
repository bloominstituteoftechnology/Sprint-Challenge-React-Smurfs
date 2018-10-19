import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
     this.smurfs = [];
  }
  
  
  render() {

//  if the URL has specific id, set smurfs as matching id smurf
// otherwise set smurfs as all smurfs and display all

if(this.props.match.params.id){
  console.log("for one smurf");
  this.smurfs = this.props.smurfs.filter( smurf => smurf.id == this.props.match.params.id);
  console.log(this.props.match.params.id);
}
else{
  this.smurfs = this.props.smurfs;
 }
 
 console.log( this.smurfs);
 

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="smurfList">
          {this.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
