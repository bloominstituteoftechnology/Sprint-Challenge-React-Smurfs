import React, {Component} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

class OneSmurf extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount = () => {
        console.log(this.props)
        const id = parseInt(this.props.match.params.id, 10)
        let smurf = this.props.smurfs.find(smurf => smurf.id === id)
        console.log(smurf)
        this.setState({smurf: smurf})
    }
    render = () => {
        return (
            <SMURF>
              <Link to={`/smurf/0`}>
                <img src={this.state.smurf.url} alt={this.state.smurf.name}/>
                <div>
                  <h2>Name:</h2>
                  <pre>{this.state.smurf.name}</pre>
                </div>
                <div>
                  <h2>Height:</h2>
                  <pre>{this.state.smurf.height} tall</pre>
                </div>
                <div>
                  <h2>Age: </h2>
                  <pre>{this.state.smurf.age} smurf years old</pre>
                </div>
              </Link>
              <div>
                <Link to={`/smurf/${this.state.smurf.id}/edit`}>Edit</Link>
              </div>
              <div>
                {/* <button onClick={() => this.state.smurf.remove(this.state.smurf)}>Boot</button> */}
                </div>
            </SMURF>
        )
    }
}

OneSmurf.defaultProps = {
  img: '',
  name: '',
  height: '',
  age: ''
}

export default OneSmurf

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