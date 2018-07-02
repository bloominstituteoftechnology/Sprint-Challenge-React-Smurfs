import React from 'react'
import { Link } from 'react-router-dom'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'

const Smurfs = (props) => {
  return (
    <div className='Smurfs'>
      <SmurfForm
        name={props.name}
        age={props.age}
        height={props.height}
        handleInputChange={props.handleInputChange}
        addSmurf={props.addSmurf}
      />
      <h1>Smurf Village</h1>
      <ul className='smurf-card'>
        {props.smurfs.map((smurf) => {
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

Smurf.defaultProps = {
  smurfs: []
}

export default Smurfs
