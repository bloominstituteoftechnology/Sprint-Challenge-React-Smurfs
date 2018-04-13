import React, { Component } from 'react'
import { Consumer } from '../Context'
import Smurf from './Smurf'

class Smurfs extends Component {
  render () {
    return (
      <div className='Smurfs'>
        <h1>Smurf Village</h1>
        <ul>
          <Consumer>
            {({ smurfs }) =>
              smurfs.map(smurf => {
                return (
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={+smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                )
              })
            }
          </Consumer>
        </ul>
      </div>
    )
  }
}

export default Smurfs
