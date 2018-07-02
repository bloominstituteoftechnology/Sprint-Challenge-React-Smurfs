import React from 'react'
import Smurf from './Smurf'
import axios from 'axios'

class SmurfDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleClick = () => {
    this.setState({ editing: true })
  }

  handleSubmit = () => {
    const { name, age, height } = this.state
    axios
      .put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, {
        name,
        age,
        height
      })
      .then((res) => this.props.getSmurfs(res))
      .catch((err) => console.log(err))
    this.setState({ editing: false })
  }

  handleDelete = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then((res) => this.props.getSmurfs())
      .catch((err) => console.log(err))
    this.props.history.push('/')
  }

  render () {
    const foundSmurf = this.props.smurfs.find(
      (smurf) => smurf.id == this.props.match.params.id
    )
    console.log(foundSmurf)
    return (
      <div className='detail-container'>
        {this.state.editing ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input placeholder={`${foundSmurf.name}`} />
              <input placeholder={`${foundSmurf.height}`} />
              <input placeholder={`${foundSmurf.age}`} />
            </form>
          </div>
        ) : (
          <div>
            <div className='smurf-details'>
              <h3>{foundSmurf.name}</h3>
              <strong>{foundSmurf.height} tall</strong>
              <p>{foundSmurf.age} smurf years old</p>
            </div>
            <div className='edit-btn' onClick={this.handleClick}>
              Edit
            </div>
            <div className='delete-btn' onClick={this.handleDelete}>
              Delete
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SmurfDetails
