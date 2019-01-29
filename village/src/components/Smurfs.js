import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";
import SmurfCard from "./SmurfCard";
class Smurfs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>
          Smurf <span className="blue">/</span>
          <span className="red">/</span> Village
        </h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            console.log(smurf);
            return (
              <div key={smurf.id}>
                <Link to={`/smurfs/${smurf.id}`}>
                  <SmurfDetails
                    update={this.props.update}
                    smurf={{
                      name: smurf.name,
                      age: smurf.age,
                      height: smurf.height,
                      id: smurf.id
                    }}
                    key={smurf.id}
                  />
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
const SmurfDetails = ({ smurf }) => {
  return <SmurfCard update={smurf.update} smurf={smurf} />;
};
Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
