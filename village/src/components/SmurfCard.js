import React, { Component } from "react";
import axios from "axios";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";

class SmurfCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: 0
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchSmurf(id);
  }

  fetchSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        if (id > response.data.length) {
          alert("Smurf not found");
        } else {
          // console.log("response", response.data[id]);
          this.setState({ smurf: response.data[id] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>Smurf Inspect</h1>
        <h4 style={{ color: "white" }}>Click Smurf card to return to all smurfs!</h4>
        <Link style={{ color: "white" }} to={`/`}>
          <Smurf smurf={this.state.smurf} />
        </Link>
      </div>
    );
  }
}

export default SmurfCard;
