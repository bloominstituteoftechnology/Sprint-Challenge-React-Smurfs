import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import axios from "axios";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3333/smurfs/${
          this.props.match.params.smurfId
        }`
      )
      .then(response => {
        console.log(response);
        this.setState({
          smurf: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.id);
    // if (!this.state.smurfs) return <h2>Loading...</h2>;
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button
          onClick={() => {
            this.props.deleteItem(
              this.props.id
            )
          }}
          className="md-button"
        >
          Delete Item
        </button>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
