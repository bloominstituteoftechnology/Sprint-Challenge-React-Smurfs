import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Component.css";

const IndSmurfCard = props => {
  return (
    <Fragment>
      <div>
        <h1>{props.smurfs[props.match.params.id].name}</h1>
        <h2>{props.smurfs[props.match.params.id].height} smurf feet tall</h2>
        <h2>{props.smurfs[props.match.params.id].age} smurf years old</h2>
        {/* <Link
          to={"/smurfList"}
          onClick={props.deleteHandler(props.match.params.id)}
        >
          Delete
        </Link> */}
        <Link to={"/smurfList"}>Home</Link>
      </div>
    </Fragment>
  );
};

IndSmurfCard.defaultProps = {
  name: "",
  age: "",
  height: ""
};

export default IndSmurfCard;
