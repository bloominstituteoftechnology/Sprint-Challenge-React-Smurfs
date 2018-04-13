import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Smurf.css";

const Smurf = props => {
  // const { name, age, height } = props.smurfs;
  return (
      <Card className="smurf-card">
        {/* <CardImg top width="100%" src="http://cdn.kidscreen.com/wp/wp-content/uploads/2016/03/Smurfs1.jpg?ebbec3" alt="Smurf bio" /> */}
        <CardBlock>
          <CardTitle>
            <h3>{props.name}</h3>
          </CardTitle>
          <CardText>
            <strong>I'm {props.height} tall</strong>
          </CardText>
          <CardText>
            <p>I'm {props.age} old</p>
          </CardText>
          <button type="button" onClick={this.deleteSmurf}>Remove me</button>
        </CardBlock>
      </Card>
  );
};

export default Smurf;
