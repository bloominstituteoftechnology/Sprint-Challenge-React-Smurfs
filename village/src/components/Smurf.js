import React from 'react'
import { Link } from 'react-router-dom'

let editSurf = false

const Smurf = (props) => {
  return editSurf ? (
    <div className='SmurfForm'>
      <form>
        <input type='text' placeholder='Enter name' />
        <input type='number' placeholder='Enter age' />
        <input type='number' placeholder='Enter height in cm' />
      </form>
    </div>
  ) : (
    <div>
      <Link to={`/smurfs/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height}-cm tall</strong>
      <p>{props.age} years old</p>
      <button onClick={props.deleteSmurf} value={props.id}>
        X
      </button>
      <button onClick={props.updateSmurf} value={props.id}>
        Edit
      </button>
    </div>
  )
}

export default Smurf
