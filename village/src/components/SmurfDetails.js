import React from 'react'
import Smurf from './Smurf'

class SmurfDetails extends React.Component {
  constructor () {
    super()
    this.state = {
      editing: false
    }
  }

  render () {
    return <div>hello{this.props.SmurfDetails}</div>
  }
}

export default SmurfDetails
