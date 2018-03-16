import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs:[],
  }

  getSmurfs = this.getSmurfs.bind(this);

  componentDidMount(){
    this.getSmurfs();
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
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

getSmurfs() {
  axios.get('http://localhost:3333/smurfs')
  .then(response => response.pre.data)
  }

// getSmurfs() {
//   axios.get('http://localhost:3333/smurfs')
//   .then(response => response.pre.data)
//   console.log(response);
//     this.setState({smurfs: pre.data});
//     this.getSmurfs
// }



export default Smurfs;