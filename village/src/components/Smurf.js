import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Smurf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      name: '',
      age: null,
      height: null
    }
  }

  componentDidMount () {
    const { name, age, height } = this.props
    this.setState({ name, age, height })
  }
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  updateSmurf = (e) => {
    e.preventDefault()
    const { name, age, height } = this.state
    const smurf = { name, age, height }
    this.props.updateSmurf(smurf, this.props.id)
    this.toggleEdit()
  }

  render () {
    return this.state.editing ? (
      <div className='SmurfForm'>
        <form onSubmit={this.updateSmurf}>
          <input
            name='name'
            value={this.state.name}
            type='text'
            placeholder='Enter name'
            onChange={this.handleChange}
          />
          <input
            name='age'
            value={this.state.age}
            type='number'
            placeholder='Enter age'
            onChange={this.handleChange}
          />
          <input
            name='height'
            value={this.state.height}
            type='number'
            placeholder='Enter height in cm'
            onChange={this.handleChange}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    ) : (
      <div>
        <Link to={`/smurfs/${this.props.id}`}>
          <h3>{this.props.name}</h3>
        </Link>
        <strong>{this.props.height}-cm tall</strong>
        <p>{this.props.age} years old</p>
        <button onClick={this.props.deleteSmurf} value={this.props.id}>
          X
        </button>
        <button onClick={this.toggleEdit} value={this.props.id}>
          Edit
        </button>
      </div>
    )
  }
}

export default Smurf
