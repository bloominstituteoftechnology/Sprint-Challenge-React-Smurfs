import React, { Component } from 'react';
const SmurfHeader = ({name, height, age, id}) => {
    return (
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Smurf Village</h1>
    <p className="lead"><strong>Papa Smurf: </strong>It doesn't matter where you come from, what matters is what you choose to be.</p>
  </div>
</div>

    );
    }
  
  export default SmurfHeader;