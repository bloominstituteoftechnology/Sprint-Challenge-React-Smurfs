import React from 'react'

const SmurfForm = (props) => {
  return (
    <div className='SmurfForm'>
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.handleInputChange}
          placeholder='name'
          value={props.name}
          type='text'
          name='name'
          required
        />
        <input
          onChange={props.handleInputChange}
          placeholder='age'
          value={props.age}
          type='number'
          name='age'
          required
        />
        <input
          onChange={props.handleInputChange}
          placeholder='height'
          value={props.height}
          type='number'
          name='height'
          required
        />
        <button className='submit-btn' type='submit'>
          Add to the village
        </button>
      </form>
    </div>
  )
}

export default SmurfForm
