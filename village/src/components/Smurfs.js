import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'

class Smurfs extends Component {
  render () {
    return (
      <div className='Smurfs'>
        <SmurfForm
          getSmurfs={this.getSmurfs}
          name={this.props.name}
          age={this.props.age}
          height={this.props.height}
          handleInputChange={this.props.handleInputChange}
          addSmurf={this.props.addSmurf}
        />
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf) => {
            return (
              <Link key={smurf.id} to={`/smurfs/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </Link>
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
