import React from "react";

class Smurf extends React.Component {
  constructor(props) {
    console.log(props.smurf, "props");
    super(props);
    this.state = {};
  }

  handleDelete = id => {
    this.props.handleDelete(id);
  };

  render() {
    // console.log(this.props.smurf, "hello");
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
      </div>
    );

    // Smurf.defaultProps = {
    //   name: '',
    //   height: '',
    //   age: ''
    // };
  }
}

export default Smurf;
