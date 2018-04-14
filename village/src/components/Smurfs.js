import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {/* {this.state.smurfs.map(smurf => {
            return <li key={smurf.id} className="smurf">
                <p> Name= {smurf.name}</p>
                <p> Age= {smurf.age}</p>
                <p> Id= {smurf.id}</p>
                <p> height= {smurf.height}</p>
              </li>;
          })} */}
          {this.state.smurfs.map(smurf => { {/*changed props to state*/}
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
      </div>;
  }
}

export default Smurfs;
