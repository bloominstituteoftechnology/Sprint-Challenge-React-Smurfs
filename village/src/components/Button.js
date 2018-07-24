import React from 'react'

const Button = ({ children }) => 
  <span
    style={
      {
        backgroundColor: 'cornflowerblue', 
        color: 'black',
        fontSize: '1rem',
        padding: '0.5rem',
      }
    }
  >
    { children }
  </span>

export default Button


