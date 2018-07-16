import React, { Component } from 'react'

import SmurfForm from './SmurfForm'
import Smurf from './Smurf'

class Smurfs extends Component {
  render (props) {
    return (
      <div className='Smurfs'>
        <SmurfForm
          addSmurf={this.props.addSmurf}
          updateName={this.props.updateName}
          updateAge={this.props.updateAge}
          updateHeight={this.props.updateHeight}
          name={this.props.name}
          age={this.props.age}
          height={this.props.height}
        />
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf) => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                updateSmurf={this.props.updateSmurf}
                history={this.props.history}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Smurfs
