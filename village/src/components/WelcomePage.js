import React from 'react';
import SmurfForm from './SmurfForm';
const WelcomePage = props => {
  return(
    <div>
      <h1>
        Welcome to Smurf Village!
      </h1>
      <p>
        Your fellow smurfs are rather timid and would like to hear more about you before they introduce themselves.
        Please fill out this form :)
      </p>
      <SmurfForm />
    </div>
  )
}

export default WelcomePage
