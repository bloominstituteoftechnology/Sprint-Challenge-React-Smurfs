import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {

  state = {
    smurfs: []
  }

  updateSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({smurfs: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurfs">
        <h2>Smurf Village</h2>
        <ul>
          {
            this.state.smurfs.map((smurf) => {
              return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
            })
          }
        </ul>
      </div>
    );
  }

  componentWillMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({smurfs: response.data}))
      .catch(error => console.log(error))
  }
  // render() {
  //   return (
  //     <div className="Smurfs">
  //       <h1>Smurf Village</h1>
  //       <ul>
  //         {this.props.smurfs.map(smurf => {
  //           return (
  //             <Smurf
  //               name={smurf.name}
  //               id={smurf.id}
  //               age={smurf.age}
  //               height={smurf.height}
  //               key={smurf.id}
  //             />
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Smurfs;
