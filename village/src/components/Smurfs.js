import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs:'',
  }
  
  render() {
    
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>

          {this.props.smurfs.map(smurf => {
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
    console.log('in compounddidmount');
  }
}
Smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
};

Smurfs.defaultProps = {
  smurfs:[],
}

export default Smurfs;