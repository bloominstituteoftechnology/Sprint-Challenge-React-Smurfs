import React from "react"

const Smurf = props => {
  return (
    <div className="Smurf card teal lighten-5">
      <div className="card-content">
        <h3>
          {" "}
          <i className="material-icons prefix md-36">
            sentiment_very_satisfied
          </i>{" "}
          {props.name}
        </h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smur years old</p>
      </div>
    </div>
  )
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
}

export default Smurf
