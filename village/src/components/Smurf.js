import React from "react";
import {Route, Link} from 'react-router-dom';

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
              defaultValue={this.state.name}
              type="text"
              name="name"
              onChange={this.onChangeHandler}
            />
            <input
              defaultValue={this.state.height}
              placeholder="Height"
              type="text"
              name="height"
              onChange={this.onChangeHandler}
            />
            <input
              defaultValue={this.state.age}
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
        <div style={{margin: '20px 0'}}>
          <Link to={`/smurfs/${this.props.id}`}>{this.props.name}</Link>
          <Route path={`/smurfs/${this.props.id}`} render={(props) => <Test {...props} smurf={this.props} /> }/>
        </div>
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
      </React.Fragment>
    )
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
