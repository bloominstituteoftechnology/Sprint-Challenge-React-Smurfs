import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const SmurfDetails = (props) => {
  const { name, height, age } = props.smurf
  return (
    <div>
      <div>{name}</div>
      <div>{height}</div>
      <div>{age}</div>
      <Link<button>Go Back</button>
    </div>
  )
}

SmurfDetails.propTypes = {
  smurf: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
  })
}

export default SmurfDetails
