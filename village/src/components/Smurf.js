import React, { Component } from 'react';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      height: props.height,
      age: props.age,
      id: props.id
    };
  }

  componentDidMount() {
    if (this.props.name === undefined && this.props.smurfs.length) {
      console.log(this.props.match.params.id, this.props.smurfs);
      const smurfInfo = this.props.smurfs.find(obj => obj.id === this.props.match.params.id);
      console.log("Testing ...", smurfInfo);
      this.setState({
        name: smurfInfo.name,
        height: smurfInfo.height,
        age: smurfInfo.age,
      });
    }
  }

  render() {
    return (
      <div className="Smurf">
        <div className="first-line">
          <img
            onClick={event => {
              this.props.deleteSmurf(event, this.state.id);
            }}
            className="delX"
            src="./images/Red_x.png"
            alt="Delete"
          />
          <h3>{this.state.name}</h3>
        </div>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

