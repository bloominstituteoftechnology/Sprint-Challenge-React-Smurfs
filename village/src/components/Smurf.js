import React from "react";

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      height: '',
      age: '',
      showForm: false
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      height: this.props.height,
      age: this.props.age
    })
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log({[e.target.name]: e.target.value });
    console.log(this.state);
  };
  deleteASmurf = id => {
    this.props.deleteASmurf(id);
  };
  updateASmurf = (id, newObj) => {
    this.props.updateASmurf(id, newObj);
  };
  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={() => this.deleteASmurf(this.props.id)}>
          Delete {this.props.name}
        </button>
        <button
          onClick={() => this.setState({ showForm: !this.state.showForm })}
        >
          Toggle Update Form
        </button>
        {this.state.showForm ? (
          <form style={{ margin: "20px" }}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.onChangeHandler}
            />
            <input
              placeholder="Height"
              type="text"
              name="height"
              onChange={this.onChangeHandler}
            />
            <input
              placeholder="Age"
              type="text"
              name="age"
              onChange={this.onChangeHandler}
            />
            <button
              type="submit"
              onClick={() => this.updateASmurf(this.props.id, {name: this.state.name, height: this.state.height, age: this.state.age})}
            >
              Update
            </button>
          </form>
        ) : null}
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
