import React, { Component } from 'react';
import './Smurf.css';
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props);
  // function routeToItem(ev, smurf) {
  //   ev.preventDefault();
  //   props.history.push(`/smurfs/${smurf.id}`);
  //   props.getItemById(smurf.id)
  // }    
    this.state = {
      routeToItem: function(ev, smurf) {
        ev.preventDefault();
        props.history.push(`/smurfs/${smurf.id}`);
        props.getItemById(smurf.id)
      }
    }
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                onClick={ev => this.state.routeToItem(ev, smurf)}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
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
