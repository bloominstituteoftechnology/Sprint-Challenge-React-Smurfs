import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Smurf = props => {
  return (
    <SMURF>
      <Link to={`/smurf/${props.id}`}>
        <img src={props.url} alt={props.name}/>
        <div>
          <h2>Name:</h2>
          <pre>{props.name}</pre>
        </div>
        <div>
          <h2>Height:</h2>
          <pre>{props.height} tall</pre>
        </div>
        <div>
          <h2>Age: </h2>
          <pre>{props.age} smurf years old</pre>
        </div>
      </Link>
      <div>
        <Link to={`/smurf/${props.id}/edit`}>Edit</Link>
      </div>
      <div>
        <button onClick={() => props.remove(props)}>Boot</button>
      </div>
    </SMURF>
  );
};

Smurf.defaultProps = {
  img: '',
  name: '',
  height: '',
  age: ''
}

export default Smurf

const SMURF = styled.div`
  border: 1px solid black;
  font-size: 2rem;
  padding: 1rem;
  text-decoration: none;
  width: fit-content;
  a {
    text-decoration: none;
    img {
      height: 200px;
      width: 200px;
    }
  }
  div {
    display: flex;
    color: #222;
    h2 {
      font-weight: 700;
      width: 75px;
    }
    a, button {
      background-color: transparent;
      border: 1px solid #222;
      border-radius: 0.5rem;
      color: #222;
      font-size: 1.6rem;
      font-weight: 700;
      margin-top: 1rem;
      padding: 1rem;
      text-decoration: none;
      text-align: center;
      width: 100%;
    }
  }
}

`