import React from 'react'
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
    console.log('in submit')
    const { name, age, height } = this.props
    axios
      .put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, {
        name,
        age,
        height
      })
      .then(
        (res) => this.props.getSmurfs(res),
        this.setState({ editing: false })
      )
      .catch((err) => console.log(err))
  }

  handleDelete = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then((res) => this.props.getSmurfs())
      .catch((err) => console.log(err))
    this.props.history.push('/')
  }

  handleHome = () => {
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
          <div className='form-container'>
            <span className='edit-heading'>Editing Mode</span>
            <form className='edit-form' onSubmit={this.handleSubmit}>
              <input
                type='text'
                placeholder={`${foundSmurf.name}`}
                value={this.props.name}
                onChange={this.props.handleInputChange}
                name='name'
              />
              <input
                type='text'
                placeholder={`${foundSmurf.height}`}
                value={this.props.age}
                onChange={this.props.handleInputChange}
                name='age'
              />
              <input
                type='text'
                placeholder={`${foundSmurf.age}`}
                value={this.props.height}
                onChange={this.props.handleInputChange}
                name='height'
              />
            </form>
            <div className='delete-btn' onClick={this.handleSubmit}>
              Submit
            </div>
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
            <div className='village-btn' onClick={this.handleHome}>
              Back to Village
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SmurfDetails
