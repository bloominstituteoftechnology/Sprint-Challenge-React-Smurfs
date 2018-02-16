import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfName:'',
  }
  
  render() {
    console.log(this.props.smurfs);
    const smurfs =this.props.smurfs;
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { smurfs.map(smurf => {
            return (
            <Smurf 
              key={smurf.id} 
              name={smurf.name} 
              age={smurf.age} 
              height={smurf.height}  
            />
            )
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.setState({smurfName: this.props.smurfs});
  }
}
Smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
};

Smurfs.defaultProps = {
  smurfs:[],
}

export default Smurfs;