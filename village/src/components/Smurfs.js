import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {

  handleButtonClick = async id => {
    const response = await axios.delete(`http://localhost:3333/smurfs/${id}`)
    this.props.stateHandler(response.data.SmurfRemoved);
  }

  render() {
    const { smurfs } = this.props
    return (
      <div>
        <h1>Smurf Village</h1>
        <div>
          <ul className="Smurfs">
            {smurfs.map(smurf => {
              return (
                <li className="Smurf">
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    handleButton={this.handleButtonClick}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Smurfs;