import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
// import axios from 'axios';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor(props) {
    super();
    this.state = {
      smurfs: []
    }
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
          <SmurfForm />
        </ul>
      </div>
    );
  }

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   axios
  //     .get('http://localhost:3333/smurfs')
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({ smurfs: response.data, loading: false });
  //     })
  //     .catch(error => {
  //       this.setState({ loading: false });
  //       console.log('there was error', error);
  //     })
  // }
}

export default Smurfs;