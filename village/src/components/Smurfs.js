import React, { Component } from 'react'
import Smurf from './Smurf'
import { SmurfsContainer } from '../styles/Smurfs'

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer className="Smurfs">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              occupation={smurf.occupation}
              img={smurf.img}
              removeSmurf={this.props.removeSmurf}
              key={smurf.id}
            />
          )
        })}
      </SmurfsContainer>
    )
  }
}

Smurf.defaultProps = {
  smurfs: []
}

export default Smurfs
