import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {

    if(this.props.smurfs.length === 0){
      return (<div>Loading...</div>);
    }
    else{}
    const clickedSmurf = this.props.smurfs.find(smurf => `${smurf.id}` === this.props.match.params.id);
    // console.log(clickedSmurf);

    return (
      <div className="Smurfs">
        {this.props.clicked ? <h1>Smurf Info</h1> : <h1>Smurf Village</h1>}
      <div>{this.props.clicked ? <Link to='/'><button>Back to Village</button></Link> : null}</div>
        <ul>
          {this.props.clicked ? 
            <Smurf
              name={clickedSmurf.name}
              id={clickedSmurf.id}
              age={clickedSmurf.age}
              height={clickedSmurf.height}
              key={clickedSmurf.id}
              deleteSmurf={this.props.deleteSmurf}
            /> : 
            this.props.smurfs.map(smurf => {
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
