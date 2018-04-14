import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

function smurfs(props) {
  return (
    <ul>
      {props.state.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        );
      })}
    </ul>
  );
}

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state={ 
    smurf:[
    {
    name: '',
    age: '',
    height: ''
    }
  ]}
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurf.map((smurf) => {
            return ( 
              <li key={smurf.id}>
              {smurf.name} 
              {smurf.age} 
              {smurf.height} 
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

//Helpers
componentDidMount() {
  axios.get('http://localhost:3333/smurfs').then((response)=>{
    this.setState({smurf: response.data})
  } ).catch(()=>{
    console.error('error getting data') //use 'console.error' to show red icon and color in return
  }) //always include .then and .catch so that you don't forget to included them.
}
}


smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
}

smurfs.defaultProps = {
  smurfs: [],
};
export default Smurfs;