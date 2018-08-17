import React, { Component } from 'react';
 
import { Link } from 'react-router-dom';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  deleteSmurf= () => 
    axios
      .delete(`http://127.0.0.1:3333/smurfs/${this.props.match.params.id}`)
      .then(response => {
        this.props.updateParentState(response.data);
        this.props.history.push("/smurfs");
      })
      .catch(err => {
        console.log(err);
  });
}

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
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
