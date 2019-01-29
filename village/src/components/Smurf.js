import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import SmurfForm from "./SmurfForm";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: [],
      editState: false,
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>
        this.setState({
          smurf: res.data.find(x => {
            return Number(x.id) === Number(this.props.match.params.id);
          }),
          loading: false
        })
      )
      .catch(err => console.log(err));
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchSmurf(newProps.match.params.id);
    }
  }
  delete = _ => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then(res => {
        this.props.update();
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  willEdit = _ => {
    this.setState(prevState => ({
      editState: !prevState.editState
    }));
  };
  render() {
    return (
      <div>
        {this.state.editState ? <SmurfForm /> : null}
        {this.state.loading ? (
          <div>
            <h2>LOADING SMURF DATA</h2>
            <PulseLoader
              css={override}
              sizeUnit={"px"}
              size={15}
              color={"#37c6ff"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <div className="Smurfs">
            {this.state.redirect && <Redirect to="/smurfs" />}
            <div className="Smurfs__Smurf">
              <h3 className="Smurfs__name">
                {this.state.smurf ? this.state.smurf.name : null}
              </h3>
              <strong className="Smurfs__height">
                {this.state.smurf ? this.state.smurf.height : null} tall
              </strong>
              <p className="Smurfs__age">
                {this.state.smurf ? this.state.smurf.age : null} smurf years old
              </p>
              <span className="icons">
                <i onClick={this.willEdit} className="far fa-edit" />
                <i onClick={this.delete} className="far fa-trash-alt" />
              </span>
            </div>
          </div>
        )}
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
