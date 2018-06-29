import React from 'react'
import Smurf from './Smurf'

class SmurfDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  render () {
    const foundSmurf = this.props.smurfs.find(
      (smurf) => smurf.id == this.props.match.params.id
    )
    console.log(foundSmurf)
    // const smurf = this.props.smurfs.find((smurf) => smurf.id)
    return <div>{foundSmurf.name}</div>
  }
}

export default SmurfDetails
