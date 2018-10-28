import React, { Component } from "react"

import Smurf from "./Smurf"

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs row">
        <h1 className="card-title">Smurf Village</h1>
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
            )
          })}
        </ul>
      </div>
    )
  }
}

Smurf.defaultProps = {
  smurfs: []
}

export default Smurfs
