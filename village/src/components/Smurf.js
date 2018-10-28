import React, { Component } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

class Smurf extends Component {
  render() {
    return (
      <div className="Smurf card teal lighten-5">
        <div className="card-content">
          <Link to={`smurfs/${this.props.smurf.id}`}>
            <h3>
              {" "}
              <i className="material-icons prefix md-36">
                sentiment_very_satisfied
              </i>{" "}
              {this.props.name}
            </h3>
          </Link>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
        </div>
      </div>
    )
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
}

export default Smurf
