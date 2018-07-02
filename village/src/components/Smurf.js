import React from 'react'

const Smurf = (props) => {
  console.log(props)
  return (
    <div className='smurf-container'>
      <div className='Smurf'>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  )
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}

export default Smurf
