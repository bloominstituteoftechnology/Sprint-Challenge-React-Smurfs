import React, { Component } from "react";
// import SmurfUpdate from './SmurfUpdate';
import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    const smurfs = this.props.fetchSmurfs();
    this.setState({
      smurfs
    });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf, i) => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  key={i}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
